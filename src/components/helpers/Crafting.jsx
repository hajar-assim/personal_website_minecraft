import React, { useState } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../../helpers/TextStyling.jsx';

const rawItems = [
  {
    image: '/assets/icons/companies/tools/aws.png',
    tooltip: 'Amazon Web Services (AWS)',
  },
  {
    image: '/assets/icons/companies/tools/datadog.svg',
    tooltip: 'Datadog',
  },
  {
    image: '/assets/icons/companies/tools/docker.png',
    tooltip: 'Docker',
  },
  {
    image: '/assets/icons/companies/tools/gha.png',
    tooltip: 'GitHub Actions',
  },
  {
    image: '/assets/icons/companies/tools/go.png',
    tooltip: 'Go (Golang)',
  },
  {
    image: '/assets/icons/companies/tools/helm.png',
    tooltip: 'Helm',
  },
  {
    image: '/assets/icons/companies/tools/java.png',
    tooltip: 'Java',
  },
  {
    image: '/assets/icons/companies/tools/jenkins.png',
    tooltip: 'Jenkins',
  },
  {
    image: '/assets/icons/companies/tools/jest.jpg',
    tooltip: 'Jest',
  },
  {
    image: '/assets/icons/companies/tools/junit.png',
    tooltip: 'JUnit',
  },
  {
    image: '/assets/icons/companies/tools/kubernetes.png',
    tooltip: 'Kubernetes',
  },
  {
    image: '/assets/icons/companies/tools/mysql.png',
    tooltip: 'MySQL',
  },
  {
    image: '/assets/icons/companies/tools/python.png',
    tooltip: 'Python',
  },
  {
    image: '/assets/icons/companies/tools/react.png',
    tooltip: 'React',
  },
  {
    image: '/assets/icons/companies/tools/springboot.png',
    tooltip: 'Spring Boot',
  },
  {
    image: '/assets/icons/companies/tools/terraform.png',
    tooltip: 'Terraform',
  },
  {
    image: '/assets/icons/companies/tools/typescript.png',
    tooltip: 'TypeScript',
  },
];

const inventoryItems = rawItems.map((item, idx) => ({
  id: idx + 1,
  ...item,
}));

function Crafting() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      style={{
        position: 'relative',
        width: 'fit-content',
        zoom: 3,
        imageRendering: 'pixelated',
      }}
    >
      {/* Crafting table background */}
      <img
        src="/assets/ui/crafting/crafting_table.png"
        alt="crafting"
        draggable={false}
        style={{
          display: 'block',
          imageRendering: 'pixelated',
        }}
      />

      {/* Inventory overlay grid */}
      <div
        style={{
          position: 'absolute',
          top: '84px',
          left: '8px',
          display: 'grid',
          gridTemplateColumns: 'repeat(9, 16px)',
          gap: '2px',
        }}
      >
        {Array.from({ length: 27 }).map((_, index) => {
          const item = inventoryItems[index];
          return (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                width: '16px',
                height: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              {/* Item icon */}
              {item && (
                <img
                  src={item.image}
                  alt="item"
                  draggable={false}
                  style={{
                    width: '14px',
                    height: '14px',
                    objectFit: 'contain',
                    imageRendering: 'pixelated',
                    cursor: 'help',
                    display: 'block',
                  }}
                />
              )}

              {/* Tooltip */}
              {hoveredIndex === index && item && (
                <div
                  style={{
                    ...tooltipStyle,
                    top: '120%',
                    left: '0',
                    transform: 'none', // remove horizontal centering
                    zoom: 0.3, // optional, or replace with scale or font-size
                    width: 'max-content',
                    minWidth: 'max-content',
                    height: '30px',
                    zIndex: 900,
                  }}
                >
                  {renderFormattedTooltip(`§f${item.tooltip}`)}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Crafting;
