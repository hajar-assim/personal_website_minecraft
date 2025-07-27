import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../../helpers/TextStyling.jsx';
import { skillList } from '../../data/skills.js';

const inventoryItems = skillList.map((item, idx) => ({
  id: idx + 1,
  ...item,
}));

function Crafting({ selectedExperience }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const result = selectedExperience?.image;
  const ingredients = selectedExperience?.skills || [];

  const getItem = (skillName) =>
    inventoryItems.find((item) => item.tooltip.toLowerCase().includes(skillName.toLowerCase()));

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        zoom: 3,
        imageRendering: 'pixelated',
      }}
    >
      {/* Crafting table background */}
      <img
        src="/assets/ui/crafting/crafting_table.png"
        alt="crafting"
        draggable={false}
        style={{
          display: 'block',
          imageRendering: 'pixelated',
        }}
      />

      {/* Output slot */}
      {result && (
        <img
          src={result}
          alt="crafted"
          style={{
            position: 'absolute',
            top: '35px',
            left: '124px',
            width: '16px',
            height: '16px',
            objectFit: 'contain',
            imageRendering: 'pixelated',
          }}
        />
      )}

      {/* Input 3x3 grid */}
      <div
        style={{
          position: 'absolute',
          top: '17px',
          left: '30px',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 16px)',
          gap: '2px',
        }}
      >
        {Array.from({ length: 9 }).map((_, index) => {
          const skill = ingredients[index];
          const item = skill ? getItem(skill) : null;

          return (
            <div
              key={`craft-${index}`}
              onMouseEnter={() => setHoveredIndex(`craft-${index}`)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {item && (
                <img
                  src={item.image}
                  alt="item"
                  draggable={false}
                  style={{
                    width: '14px',
                    height: '14px',
                    objectFit: 'contain',
                    imageRendering: 'pixelated',
                    cursor: 'help',
                    display: 'block',
                  }}
                />
              )}
              {hoveredIndex === `craft-${index}` && item && (
                <div
                  style={{
                    ...tooltipStyle,
                    top: '120%',
                    left: '0',
                    transform: 'none',
                    zoom: 0.3,
                    width: 'max-content',
                    minWidth: 'max-content',
                    height: '30px',
                    zIndex: 900,
                  }}
                >
                  {renderFormattedTooltip(`§f${item.tooltip}`)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Full Inventory (Bottom) */}
      <div
        style={{
          position: 'absolute',
          top: '84px',
          left: '8px',
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: '2px',
        }}
      >
        {Array.from({ length: 27 }).map((_, index) => {
          const item = inventoryItems[index];
          return (
            <div
              key={`inv-${index}`}
              onMouseEnter={() => setHoveredIndex(`inv-${index}`)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {item && (
                <img
                  src={item.image}
                  alt="item"
                  draggable={false}
                  style={{
                    width: '14px',
                    height: '14px',
                    objectFit: 'contain',
                    imageRendering: 'pixelated',
                    cursor: 'help',
                    display: 'block',
                  }}
                />
              )}
              {hoveredIndex === `inv-${index}` && item && (
                <div
                  style={{
                    ...tooltipStyle,
                    top: '120%',
                    left: '0',
                    transform: 'none',
                    zoom: 0.3,
                    width: 'max-content',
                    minWidth: 'max-content',
                    height: '30px',
                    zIndex: 900,
                  }}
                >
                  {renderFormattedTooltip(`§f${item.tooltip}`)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crafting;
