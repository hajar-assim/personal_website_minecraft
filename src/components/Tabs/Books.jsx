import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../helpers/TextStyling';

const Books = ({ books }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const itemSize = 70;
  const gap = 130;

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: `${gap}px`,
        position: 'relative',
        padding: '1rem',
        imageRendering: 'pixelated',
      }}
    >
      {books.map((book, index) => (
        <div
          key={book.id || index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          style={{
            position: 'relative',
            width: `${itemSize}px`,
            height: `${itemSize}px`,
          }}
        >
          <img
            src={book.image}
            alt={book.title}
            style={{
              width: '180px',
              height: '240px',
              imageRendering: 'pixelated',
            }}
          />
          {hoveredIndex === index && book.review && (
            <div
              style={{
                ...tooltipStyle,
                top: '200%',
                bottom: 'unset',
                left: '250%',
                zIndex: 900,
              }}
            >
              {renderFormattedTooltip(`§d${book.title}\n§7${book.review}`)}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Books;
