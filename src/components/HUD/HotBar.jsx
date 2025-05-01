import React from 'react';

const HotBar = ({ hotbar, scale = 2 }) => {
  const slotSize = 20.6 * scale;
  const barWidth = 182 * scale;
  const barHeight = 22 * scale;
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
        <img
          key={index}
          src={item.src}
          alt={item.alt}
          style={{
            position: 'absolute',
            top: `${3 * scale}px`,
            left: `${index * slotSize + 2 * scale}px`,
            width: `${itemSize}px`,
            height: `${itemSize}px`,
            imageRendering: 'pixelated',
          }}
        />
      ))}
    </div>
  );
};

export default HotBar;
