import React, { useState } from 'react';
import Projects from './tabs/Projects';
import Experience from './tabs/experience/Experience';
import AboutMe from './tabs/AboutMe';
import Contact from './tabs/Contact';
import Books from './tabs/Books';
import { projects } from './data/projects';
import { books } from './data/books';

const TABS = [
  { id: 'about me', icon: './assets/icons/white_tulip.png', label: 'AboutMe' },
  { id: 'experience', icon: './assets/icons/experience_bottle.png', label: 'Experience' },
  { id: 'projects', icon: './assets/icons/chest_minecart.png', label: 'Projects' },
  { id: 'books', icon: './assets/icons/knowledge_book.png', label: 'Books' },
  { id: 'contact', icon: './assets/icons/spyglass.png', label: 'Contact' },
];

const TabLayout = ({ backgroundAudioRef }) => {
  const [activeTab, setActiveTab] = useState('about me');
  const iconSize = 16 * 4.5; // replace 4.5 with scale after

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
            top: '-90px',
            left: '-250px',
          }}
        >
          {TABS.map((tab, index) => {
            const isActive = activeTab === tab.id;
            const tabImg = isActive
              ? `./assets/ui/tab_selected_${index + 1}.png`
              : './assets/ui/tab_unselected.png';

            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  width: '98px',
                  height: '108px',
                  marginRight: '2px',
                  position: 'relative',
                  zIndex: isActive ? 3 : 1,
                  cursor: 'zoom-in',
                }}
              >
                <img
                  src={tabImg}
                  draggable={false}
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
                  draggable={false}
                  style={{
                    position: 'relative',
                    width: `${iconSize}px`,
                    height: `${iconSize}px`,
                    imageRendering: 'pixelated',
                    pointerEvents: 'none',
                    margin: '12px',
                    marginTop: '15px',
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
            backgroundImage: "url('./assets/ui/panel_background.png')",
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
          {activeTab === 'about me' && (
            <>
              <div style={{ fontSize: '30px' }}>about me</div>
              <AboutMe backgroundAudioRef={backgroundAudioRef} />
            </>
          )}

          {activeTab === 'experience' && (
            <>
              <div style={{ fontSize: '30px' }}>experience</div>
              <Experience />
            </>
          )}

          {activeTab === 'projects' && (
            <>
              <div style={{ fontSize: '30px' }}>projects</div>
              <Projects projects={projects} scale={4.5} />
            </>
          )}

          {activeTab === 'books' && (
            <>
              <div style={{ fontSize: '30px' }}>books</div>
              <Books books={books} />
            </>
          )}

          {activeTab === 'contact' && (
            <>
              <div style={{ fontSize: '30px' }}>contact</div>
              <Contact />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TabLayout;
