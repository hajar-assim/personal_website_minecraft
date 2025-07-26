import React from 'react';

function MinecraftSearchBar({ value, onChange }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: '116px',
          height: '20px',
          backgroundColor: 'black',
          color: 'white',
          border: '1px solid white',
          outline: 'none',
          fontFamily: 'Minecraftia, monospace',
          fontSize: '13px',
          lineHeight: '16px',
          paddingTop: '10px',
          paddingLeft: '4px',
          margin: '4px',
          imageRendering: 'pixelated',
        }}
      />
    </div>
  );
}

export default MinecraftSearchBar;
