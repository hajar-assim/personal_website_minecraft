import React, { useState } from 'react';
import Projects from './Tabs/Projects';

const TABS = [
  { id: 'experience', icon: '/assets/experience_bottle.png', label: 'Experience' },
  { id: 'projects', icon: '/assets/knowledge_book.png', label: 'Projects' },
  { id: 'contact', icon: '/assets/spyglass.png', label: 'Contact' },
];

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('experience');

  // max 24 projects
  const projects = [
    { id: 1, name: 'musik', image: '/assets/music_disc.png' },
    { id: 2, name: 'breakout', image: '/assets/ender_pearl.png' },
    { id: 3, name: 'fitness', image: '/assets/chainmail_boots.png' },
    { id: 4, name: 'sysc.ca', image: '/assets/lantern.png' },
    { id: 4, name: 'firefighting drone system', image: '/assets/campfire.png' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        {/* Tabs */}
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            top: '-61px',
            left: '-391px',
          }}
        >
          {TABS.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const tabImg = isActive
              ? `/assets/tab_selected_${index + 1}.png`
              : '/assets/tab_unselected.png';

            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '68px',
                  height: '78px',
                  marginRight: '2px',
                  position: 'relative',
                  zIndex: isActive ? 3 : 1,
                  cursor: 'pointer',
                }}
              >
                <img
                  src={tabImg}
                  alt={tab.label}
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    imageRendering: 'pixelated',
                  }}
                />
                <img
                  src={tab.icon}
                  alt={tab.label}
                  style={{
                    position: 'relative',
                    width: '58px',
                    height: '58px',
                    padding: '8px',
                    marginTop: '7px',
                    marginLeft: '4px',
                    imageRendering: 'pixelated',
                    pointerEvents: 'none',
                    cursor: 'pointer',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Panel with medium z-index */}
        <div
          style={{
            width: '1000px', // expanded width
            height: '670px', // fixed height prevents unwanted growth
            backgroundImage: "url('/assets/panel_background.png')",
            backgroundSize: '100% 100%', // or use '100% 100%' to stretch explicitly
            backgroundRepeat: 'no-repeat',
            imageRendering: 'pixelated',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            zIndex: 2,
            padding: '50px',
            paddingLeft: '80px',
          }}
        >
          {activeTab === 'experience' && <div style={{ fontSize: '30px' }}>experience</div>}
          {activeTab === 'projects' && (
            <>
              <div style={{ fontSize: '30px' }}>projects</div>
              <Projects projects={projects} />
            </>
          )}

          {activeTab === 'contact' && <div style={{ fontSize: '30px' }}>contact</div>}
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
