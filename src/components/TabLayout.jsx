import React, { useState } from 'react';
import Projects from './tabs/Projects';
import Experience from './tabs/Experience';
import AboutMe from './tabs/AboutMe';
import Contact from './tabs/Contact';
import Books from './tabs/Books';

const TABS = [
  { id: 'about me', icon: '/assets/white_tulip.png', label: 'AboutMe' },
  { id: 'experience', icon: '/assets/experience_bottle.png', label: 'Experience' },
  { id: 'projects', icon: '/assets/chest_minecart.png', label: 'Projects' },
  { id: 'books', icon: '/assets/knowledge_book.png', label: 'Books' },
  { id: 'contact', icon: '/assets/spyglass.png', label: 'Contact' },
];

const TabLayout = () => {
  const [activeTab, setActiveTab] = useState('about me');
  const iconSize = 16 * 4.5; // replace 4.5 with scale after

  // max 24 projects
  // TODO: move to data file
  const projects = [
    {
      id: 1,
      name: 'musik',
      description:
        'able to take youtube playlists and convert them into spotify playlists so you can enjoy your favourite songs on both platforms, easily and conveniently.',
      tech: 'python • spotify api • youtube api',
      image: '/assets/music_disc.png',
      link: 'https://github.com/',
    },
    {
      id: 2,
      name: 'breakout',
      description:
        'a personalized recreation of the game breakout, including an addition of powerups, themes, and levels.',
      tech: 'python • pygame',
      image: '/assets/ender_pearl.png',
      link: 'https://hajar-assim.github.io/hajarassim-portfolio/#:~:text=themes%2C%20and%20levels.-,python%20%E2%80%A2%20pygame,-mus%C3%AFk',
    },
    {
      id: 3,
      name: 'fitnesstrackr',
      description:
        'a health and fitness club management system empowering members to achieve fitness goals and monitor progress effectively.',
      tech: 'spring boot • react • postgres',
      image: '/assets/chainmail_boots.png',
      link: 'https://github.com/HasibKhodayar/COMP_3005_ProjectV2',
    },
    {
      id: 4,
      name: 'sysc.ca',
      description:
        'a site built with a team of other students, designed to help guide first year engineering students at carleton with resources, schedules, and the answered to FAQs',
      tech: 'react • javascript',
      image: '/assets/lantern.png',
      link: 'https://github.com/hajar-assim/sysc-site',
    },
    {
      id: 5,
      name: 'firefighting drone system',
      description:
        'a real-time, distributed Java system that coordinates firefighting drones with fault tolerance and dynamic scheduling.',
      tech: 'java • swing',
      image: '/assets/campfire.png',
      link: 'https://github.com/hajar-assim/Firefighting-Drone-Swarm-Group-5',
    },
    {
      id: 5,
      name: 'lunchbox ai',
      description:
        'a lightweight computer vision system that monitors food queue lengths and notifies staff in real-time to optimize service during peak hours.',
      tech: 'python • tensorflow • opencv • slack_sdk • slack_bolt',
      image: '/assets/cooked_mutton.png',
      link: 'https://github.com/hajar-assim/LunchBox-AI',
    },
  ];

  const books = [
    {
      id: 1,
      title: 'Clean Code',
      review:
        "some solid advice if you're early in your dev journey - but a few takes are kinda outdated.",
      image: '/assets/clean_code.png',
    },
    {
      id: 2,
      title: 'The DevOps Handbook',
      review:
        'still working through it - but already getting some solid insight into scaling and delivery.',
      image: '/assets/devops_handbook.png',
    },
    {
      id: 3,
      title: 'Fundamentals of Software Architecture',
      review:
        'really liked how it breaks down architecture trade-offs without sounding biased and explained it in a simple fashion.',
      image: '/assets/fundamentals_of_software_architecture.png',
    },
    {
      id: 4,
      title: 'Modern Software Engineering',
      review: 'haven’t started this one yet, it’s chilling in the backlog',
      image: '/assets/modern_soft_eng.png',
    },
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
            top: '-90px',
            left: '-250px',
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
          {activeTab === 'about me' && (
            <>
              <div style={{ fontSize: '30px' }}>about me</div>
              <AboutMe />
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
