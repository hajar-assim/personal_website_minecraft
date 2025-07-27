import React from 'react';

const HeartBar = ({ hearts, iconSize }) => (
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
          src="./assets/icons/heart-empty.png"
          alt="container"
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
        {i < hearts && (
          <img
            src="./assets/icons/heart.png"
            alt="heart"
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
        )}
      </div>
    ))}
  </div>
);

export default HeartBar;
