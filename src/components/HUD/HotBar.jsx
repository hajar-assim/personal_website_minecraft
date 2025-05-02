import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../helpers/TextStyling';

const HotBar = ({ hotbar, scale = 2 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const barWidth = 190 * scale;
  const barHeight = 23 * scale;
  const slotSize = barWidth / 9;
  const itemSize = 16 * scale;

  return (
    <div style={{ position: 'relative', width: `${barWidth}px`, height: `${barHeight}px` }}>
      <img
        src="/assets/hotbar.png"
        alt="hotbar"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          imageRendering: 'pixelated',
        }}
      />
      {hotbar.map((item, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            top: `${3.8 * scale}px`,
            left: `${index * slotSize + 3 * scale}px`,
            width: `${itemSize}px`,
            height: `${itemSize}px`,
          }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <img
            src={item.src}
            alt={item.alt}
            style={{
              width: '100%',
              height: '100%',
              imageRendering: 'pixelated',
            }}
          />
          {hoveredIndex === index && item.tooltip && (
            <div style={tooltipStyle}>{renderFormattedTooltip(item.tooltip)}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HotBar;
