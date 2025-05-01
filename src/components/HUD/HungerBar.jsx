import React from 'react';

const HungerBar = ({ hunger, iconSize }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      maxWidth: '100%',
      overflowX: 'auto',
    }}
  >
    {[...Array(10)].map((_, i) => (
      <div
        key={i}
        style={{ position: 'relative', width: iconSize, height: iconSize, flex: '0 0 auto' }}
      >
        <img
          src="/assets/hunger-empty.png"
          alt="container"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            imageRendering: 'pixelated',
          }}
        />
        {i < hunger && (
          <img
            src="/assets/hunger.png"
            alt="hunger"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              imageRendering: 'pixelated',
            }}
          />
        )}
      </div>
    ))}
  </div>
);

export default HungerBar;
