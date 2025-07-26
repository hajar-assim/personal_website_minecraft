import React from 'react';

function Crafting() {
  return (
    <div>
      <img
        src="/assets/ui/crafting/crafting_table.png"
        alt="search"
        draggable={false}
        style={{
          zoom: 3,
          imageRendering: 'pixelated',
          display: 'block',
        }}
      />
    </div>
  );
}

export default Crafting;
