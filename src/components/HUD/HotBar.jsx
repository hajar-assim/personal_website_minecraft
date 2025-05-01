import React, { useState } from 'react';

const tooltipStyle = {
  position: 'absolute',
  bottom: '120%',
  left: '50%',
  transform: 'translateX(-50%)',
  backgroundColor: '#1b0a42',
  border: '1px solid #555',
  padding: '4px 8px',
  fontSize: '16px',
  fontFamily: 'Minecraftia, monospace',
  color: '#fff',
  whiteSpace: 'pre-wrap',
  zIndex: 999,
  imageRendering: 'pixelated',
  boxShadow: '0 0 0 1px black',
  maxWidth: '400px',
  minWidth: '320px',
};

const colorMap = {
  0: '#000000',
  1: '#0000AA',
  2: '#00AA00',
  3: '#00AAAA',
  4: '#AA0000',
  5: '#AA00AA',
  6: '#FFAA00',
  7: '#AAAAAA',
  8: '#555555',
  9: '#5555FF',
  a: '#55FF55',
  b: '#55FFFF',
  c: '#FF5555',
  d: '#FF55FF',
  e: '#FFFF55',
  f: '#FFFFFF',
};

function renderFormattedTooltip(text) {
  const segments = [];
  let buffer = '';
  let color = '#FFFFFF';
  let fontWeight = 'normal';
  let fontStyle = 'normal';
  let textDecoration = 'none';

  function pushBuffer() {
    if (!buffer) return;
    segments.push(
      <span
        style={{
          color,
          fontWeight,
          fontStyle,
          textDecoration,
        }}
      >
        {buffer}
      </span>
    );
    buffer = '';
  }

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '§' && i + 1 < text.length) {
      pushBuffer();
      const code = text[++i];
      if (colorMap[code]) {
        color = colorMap[code];
      } else if (code === 'l') {
        fontWeight = 'bold';
      } else if (code === 'o') {
        fontStyle = 'italic';
      } else if (code === 'n') {
        textDecoration = 'underline';
      } else if (code === 'm') {
        textDecoration = 'line-through';
      } else if (code === 'r') {
        color = '#FFFFFF';
        fontWeight = 'normal';
        fontStyle = 'normal';
        textDecoration = 'none';
      }
    } else if (text[i] === '\n') {
      pushBuffer();
      segments.push(<br />);
    } else {
      buffer += text[i];
    }
  }
  pushBuffer();
  return segments;
}

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
