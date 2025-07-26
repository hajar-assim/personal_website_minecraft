import React, { useState } from 'react';
import MinecraftSearchBar from '../helpers/SearchBar';
import { playClickSound } from '../helpers/helperFunctions.js';
import { renderFormattedTooltip, tooltipStyle } from '../../helpers/TextStyling.jsx';

function SearchPanel() {
  const [search, setSearch] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const craftableItems = [
    {
      id: 1,
      image: '/assets/icons/companies/solace.png',
      title: 'Solace',
      team: 'Cloud Infrastructure Team',
      description: 'Workin on it',
    },
    {
      id: 2,
      image: '/assets/icons/companies/nokia.png',
      title: 'Nokia',
      team: 'OAM Team',
      description:
        'Worked as a member of the IP Routing OAM team, improving DMM/TWAMP test reliability, reducing packet loss, and refactoring stop logic to ensure memory safety and system stability in C/C++ routing environments.',
    },
    {
      id: 3,
      image: '/assets/icons/companies/entrust.png',
      title: 'Entrust',
      team: 'Verification Team',
      description:
        'Worked as a member of the Verification team, contributing to the Entrust cloud portal by enhancing UI, resolving bugs, and implementing features to streamline verification processes.',
    },
    {
      id: 4,
      image: '/assets/icons/companies/trend.png',
      title: 'Trend Micro',
      team: 'R&D Cloud One Workload Security Team',
      description:
        'Working on the R&D Cloud One Workload Security Team, aiding in driving the containerization of services within Deep Security Manager to improve deployment efficiency and scalability in AWS using Docker, Kubernetes, and AWS services.',
    },
    {
      id: 5,
      image: '/assets/icons/companies/solace.png',
      title: 'Solace',
      team: 'Observability Team',
      description:
        'Worked as a member of the PubSub+ Insights team, transitioning multiple pages from Aurelia to React, and implementing front-end testing strategies with Jest, Testing Library, and Cypress to enhance the Insights section of the operation console UI.',
    },
  ];

  // 🧠 Filter based on search term (case-insensitive)
  const filteredItems = craftableItems.filter((item) =>
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
          src="/assets/ui/crafting/recipe_book.png"
          alt="search"
          draggable={false}
          style={{ display: 'block', imageRendering: 'pixelated' }}
        />

        <img
          src="/assets/ui/crafting/filter_enabled.png"
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
                src="/assets/ui/crafting/slot_craftable.png"
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
                onClick={playClickSound}
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
