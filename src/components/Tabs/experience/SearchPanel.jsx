import React, { useState } from 'react';
import MinecraftSearchBar from './SearchBar.jsx';
import { experiencesList } from '../../data/experiences.js';
import { playClickSound } from '../../helpers/helperFunctions.js';
import { renderFormattedTooltip, tooltipStyle } from '../../../helpers/TextStyling.jsx';

function SearchPanel({ onSelectExperience }) {
  const [search, setSearch] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const filteredItems = experiencesList.filter((item) =>
    [item.title, item.team, item.description].some((field) =>
      field.toLowerCase().includes(search.trim().toLowerCase())
    )
  );

  return (
    <div style={{ position: 'relative', width: 'fit-content' }}>
      <div
        style={{
          position: 'relative',
          width: 'fit-content',
          zoom: 3,
          transformOrigin: 'top left',
          imageRendering: 'pixelated',
        }}
      >
        <img
          src="./assets/ui/crafting/recipe_book.png"
          alt="search"
          draggable={false}
          style={{ display: 'block', imageRendering: 'pixelated' }}
        />

        <img
          src="./assets/ui/crafting/filter_enabled.png"
          alt="icon"
          draggable={false}
          style={{
            position: 'absolute',
            top: '11px',
            left: '110px',
            imageRendering: 'pixelated',
            pointerEvents: 'none',
          }}
        />

        {/* 🔍 Search input */}
        <div style={{ zoom: 0.7, position: 'absolute', top: '13px', left: '33px' }}>
          <MinecraftSearchBar value={search} onChange={setSearch} />
        </div>

        {/* 🧱 Filtered items */}
        <div
          style={{
            position: 'absolute',
            top: '40px',
            left: '11px',
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 24px)',
            gap: '1px',
          }}
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: 'relative', width: '24px', height: '24px' }}
            >
              <img
                src="./assets/ui/crafting/slot_craftable.png"
                alt="slot"
                draggable={false}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  imageRendering: 'pixelated',
                }}
              />
              <img
                src={item.image}
                alt="item"
                draggable={false}
                onClick={() => {
                  playClickSound();
                  onSelectExperience(item);
                }}
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: '3px',
                  width: '70%',
                  height: '70%',
                  padding: '1px',
                  objectFit: 'contain',
                  cursor: 'help',
                  imageRendering: 'pixelated',
                }}
              />
              {hoveredIndex === index && item.title && (
                <div
                  style={{
                    ...tooltipStyle,
                    top: '120%',
                    bottom: 'unset',
                    left: '210%',
                    zoom: 0.3,
                    width: '500px',
                    zIndex: 900,
                  }}
                >
                  {renderFormattedTooltip(
                    `§f${item.title}\n§9§o${item.team}\n§7${item.description}`
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchPanel;
