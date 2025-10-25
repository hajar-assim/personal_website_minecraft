import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../helpers/TextStyling';

const GameCard = ({ gameName, iconPath, size = 64 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        cursor: 'pointer',
        display: 'inline-block',
      }}
    >
      <img
        src={iconPath}
        alt={gameName}
        draggable={false}
        style={{
          width: '100%',
          height: '100%',
          imageRendering: 'pixelated',
          transition: 'transform 0.1s ease',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
        }}
      />
      {isHovered && (
        <div
          style={{
            ...tooltipStyle,
            top: '110%',
            bottom: 'unset',
            width: 'fit-content',
            whiteSpace: 'nowrap',
            minWidth: 'unset',
            maxWidth: 'unset',
          }}
        >
          {renderFormattedTooltip(`§e${gameName}`)}
        </div>
      )}
    </div>
  );
};

export default GameCard;
