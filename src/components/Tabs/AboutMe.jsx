import React from 'react';
import ScrollablePanel from '../../helpers/ScrollablePanel';

function AboutMe() {
  return (
    <ScrollablePanel>
      <div
        style={{
          fontSize: '16px',
          lineHeight: '1.5',
          color: 'black',
          paddingTop: '0.4rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <p>
          Hey, I’m Hajar - currently spending the summer at{' '}
          <a
            href="https://solace.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontWeight: 'bold', color: '#038765', textDecoration: 'none', cursor: 'help' }}
          >
            Solace
          </a>{' '}
          as a software developer on the infrastructure team. After that, I’ll be heading into my
          final year of software engineering at Carleton :(? :)? .
        </p>
        <p>
          I’ve dabbled in a bit of everything - frontend, backend, systems, infrastructure, cloud
          stuff, you name it. I like picking up new tools, breaking things (on purpose...), and
          figuring out how all the layers of a system fit together.
        </p>
        <p>
          Outside of all this tech stuff, I’m probably gaming (if that wasn’t already plainly obvious),
          sketching with watercolors, or learning a new piano piece that’s a way out of my league.
        </p>
      </div>
    </ScrollablePanel>
  );
}

export default AboutMe;
