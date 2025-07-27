import React from 'react';
import HeartBar from './hud/HeartBar';
import HungerBar from './hud/HungerBar';
import XPBar from './hud/XPBar';
import HotBar from './hud/HotBar';

const MinecraftHUD = ({ level = 3, hearts = 10, hunger = 5, xp = 1.0 }) => {
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
        zIndex: 10,
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
          gap: '25px',
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
          <img
            src="./assets/icons/level_three.png"
            draggable={false}
            alt="container"
            style={{
              position: 'absolute',
              imageRendering: 'pixelated',
              marginTop: '-10px',
              marginLeft: '-20px',
              zIndex: 30,
            }}
          />
        </div>

        <HungerBar hunger={hunger} iconSize={iconSize} />
      </div>
      <XPBar xp={xp} scale={4.5} />

      <HotBar
        hotbar={[
          {
            src: './assets/icons/player_head.png',
            alt: 'head',
            tooltip:
              '§aStudent Head - §lHajar Assim\n§7Software Engineering\n§3Year IV\n§9§oWrites code that compiles *and* runs',
          },
          {
            src: './assets/icons/enchanted_book.png',
            alt: 'book',
            tooltip:
              '§dEnchanted Book of Study\n§7Carleton University\n§7B.Eng Software Engineering\n§32021–2026',
          },
          {
            src: './assets/icons/iron_sword.png',
            alt: 'sword',
            tooltip:
              '§cSword of Deployment\n§7Docker · AWS · Datadog · Git · Linux · Jenkins · GitHub Actions · PostgreSQL\n§9§o100% test coverage... allegedly',
          },
          {
            src: './assets/icons/iron_pickaxe.png',
            alt: 'pickaxe',
            tooltip:
              '§bPickaxe of Logic\n§7Java · C · Python · HTML/CSS · JavaScript · TypeScript · SQL · Go · Racket\n§9§oFor mining through complexity',
          },
          {
            src: './assets/icons/iron_axe.png',
            alt: 'axe',
            tooltip:
              '§6Axe of Abstraction\n§7Spring Boot · React · Jest · Cypress · Terraform · NumPy · Matplotlib · SciPy\n§9§oLeave no legacy code behind',
          },
        ]}
        scale={4.5}
      />
    </div>
  );
};

export default MinecraftHUD;
