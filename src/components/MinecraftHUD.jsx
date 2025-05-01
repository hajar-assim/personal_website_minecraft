import React from 'react';
import HeartBar from './HUD/HeartBar';
import HungerBar from './HUD/HungerBar';
import XPBar from './HUD/XPBar';
import HotBar from './HUD/HotBar';

const MinecraftHUD = ({ level = 3, hearts = 10, hunger = 10, xp = 0.9 }) => {
  const iconSize = '37px';

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: 0,
        right: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'transparent',
        zIndex: 50,
        gap: '0.4rem',
        width: '100%',
        paddingLeft: '1rem',
        paddingRight: '1rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem',
          maxWidth: '100%',
          overflowX: 'auto',
        }}
      >
        <HeartBar hearts={hearts} iconSize={iconSize} />

        <div
          style={{
            color: '#22c55e',
            fontWeight: 'bold',
            marginLeft: '1rem',
            marginRight: '1rem',
            flexShrink: 0,
            fontSize: '64px',
            imageRendering: 'pixelated',
          }}
        >
          <div
            style={{
              fontFamily: 'Minecraftia',
              fontSize: '40px',
              transform: 'translateY(10px)', // shift down just a bit
              color: '#22c55e',
              fontWeight: 'bold',
              imageRendering: 'pixelated',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            3
          </div>
        </div>

        <HungerBar hunger={hunger} iconSize={iconSize} />
      </div>
      <div style={{ marginTop: '-20px' }}>
        <XPBar xp={0.75} scale={4.5} />
      </div>

      <HotBar
        hotbar={[
          { src: '/assets/enchanted_book.png', alt: 'book' },
          { src: '/assets/iron_sword.png', alt: 'sword' },
          { src: '/assets/iron_pickaxe.png', alt: 'pickaxe' },
          { src: '/assets/iron_axe.png', alt: 'axe' },
        ]}
        scale={4.5}
      />
    </div>
  );
};

export default MinecraftHUD;
