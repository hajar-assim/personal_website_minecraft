import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../helpers/TextStyling';

const Projects = ({ projects }) => {
  const numColsPerChest = 4;
  const totalCols = 8;
  const cellSize = 70;
  const numRows = 3;
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
        src="./assets/ui/chest_slots.png"
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
        src="./assets/ui/chest_slots.png"
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
        const gap = 10;
        const x = col * (cellSize + gap);
        const y = row * (cellSize + gap);
        const formattedTooltip = renderFormattedTooltip(
          `§6${project.name}\n§7${project.description}\n§9§o${project.tech}`
        );

        return (
          <a
            key={project.id || index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              position: 'absolute',
              top: y + 4,
              left: x + 6,
              width: cellSize,
              height: cellSize,
              cursor: 'help',
              display: 'block',
              textDecoration: 'none',
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
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
            {hoveredIndex === index && (
              <div
                style={{
                  ...tooltipStyle,
                  top: '120%',
                  left: '250%',
                  bottom: 'unset',
                  minWidth: '400px',
                }}
              >
                {formattedTooltip}
              </div>
            )}
          </a>
        );
      })}
    </div>
  );
};

export default Projects;
