import React from 'react';
import ScrollablePanel from '../../helpers/ScrollablePanel';
import JukeboxPlayer from '../helpers/JukeboxPlayer';
import GameCard from '../GameCard';
import { favoriteGames } from '../data/games';

function AboutMe({ backgroundAudioRef }) {
  const iconSize = 16 * 1; // replace 4.5 with scale after
  return (
    <ScrollablePanel>
      <div
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          color: 'black',
          paddingTop: '0.4rem',
          marginBottom: '1.4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <p>
          Hey, I’m Hajar - currently spending the semester working at{' '}
          <a
            href="https://solace.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', color: '#038765', textDecoration: 'none', cursor: 'help' }}
          >
            Solace
          </a>{' '}
          as a software developer on the infrastructure team. Alongside that, I'm working through my
          final year of courses to finish my degree for software engineering at
          Carleton :(? :)? .
        </p>
        <p>
          I’ve dabbled in a bit of everything - frontend, backend, systems, infrastructure, cloud
          stuff, you name it. I like picking up new tools, breaking things (on purpose...), and
          figuring out how all the layers of a system fit together.
        </p>
        <p>
          Outside of all this tech stuff, I’m probably gaming (if that wasn’t already plainly
          obvious), sketching with watercolors, or learning a new piano piece that’s a way out of my
          league.
        </p>
        <p>
          Below are some of my favourite piano pieces, currently trying to learn Idea22. Drag and
          drop a disc into the jukebox to play it!
          <img
            src={`./assets/icons/note.png`}
            alt={'note'}
            draggable={false}
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              imageRendering: 'pixelated',
            }}
          />
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <JukeboxPlayer backgroundAudioRef={backgroundAudioRef} />
        </div>
        <p>Below are some of my favourite games! You should definitely try them out at some point in your lifetime~</p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '1rem',
            marginBottom: '1rem',
          }}
        >
          {favoriteGames.map((game) => (
            <GameCard key={game.id} gameName={game.name} iconPath={game.icon} size={64} />
          ))}
        </div>
      </div>
    </ScrollablePanel>
  );
}

export default AboutMe;