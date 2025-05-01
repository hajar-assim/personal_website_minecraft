import React from 'react';

const Projects = ({ projects }) => {
  const numColsPerChest = 4;
  const totalCols = 8;
  const cellSize = 70;
  const numRows = 3;

  return (
    <div
      style={{
        position: 'relative',
        width: cellSize * totalCols,
        height: cellSize * numRows,
        imageRendering: 'pixelated',
      }}
    >
      {/* Left chest */}
      <img
        src="/assets/chest_slots.png"
        alt="Left Chest"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: 100 * numColsPerChest,
          height: 'auto',
        }}
      />

      {/* Right chest */}
      <img
        src="/assets/chest_slots.png"
        alt="Right Chest"
        style={{
          position: 'absolute',
          left: 100 * numColsPerChest,
          top: 0,
          width: 100 * numColsPerChest,
          height: 'auto',
        }}
      />

      {/* Project items */}
      {projects.map((project, index) => {
        const row = Math.floor(index / totalCols);
        const col = index % totalCols;

        const gap = 10; // space between items
        const x = col * (cellSize + gap);
        const y = row * (cellSize + gap);

        return (
          <div
            key={project.id || index}
            style={{
              position: 'absolute',
              top: y + 4,
              left: x + 6,
              width: cellSize,
              height: cellSize,
              cursor: 'pointer',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              style={{
                width: '100%',
                height: '100%',
                imageRendering: 'pixelated',
                pointerEvents: 'none',
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
