import React from 'react';

const XPBar = ({ xp, scale = 2 }) => {
  const barWidth = 182 * scale;
  const barHeight = 5 * scale;

  return (
    <div style={{ position: 'relative', width: `${barWidth}px`, height: `${barHeight}px` }}>
      <img
        src="/assets/ui/experience_bar_background.png"
        alt="xp background"
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
        src="/assets/ui/experience_bar_progress.png"
        alt="xp fill"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: `${barWidth}px`,
          height: '100%',
          clipPath: `inset(0 ${100 - xp * 100}% 0 0)`,
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
};

export default XPBar;
