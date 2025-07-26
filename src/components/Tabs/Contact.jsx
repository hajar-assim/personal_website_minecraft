import React from 'react';

function Contact() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
      <p>feel free to reach out or learn more</p>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'left', gap: '2rem' }}>
        <img
          draggable={false}
          src="/assets/icons/invite.png"
          alt="email"
          draggable={false}
          style={{
            width: '70px',
            height: '70px',
            cursor: 'help',
          }}
          onClick={() => window.open('mailto:hajarassim@cmail.com', '_blank')}
        />

        <img
          src="/assets/icons/linkedin.png"
          alt="linkedin"
          draggable={false}
          style={{
            width: '70px',
            height: '70px',
            cursor: 'help',
          }}
          onClick={() =>
            window.open('https://www.linkedin.com/in/hajar-assim-29310720b/', '_blank')
          }
        />

        <img
          src="/assets/icons/github.svg"
          alt="github"
          draggable={false}
          style={{
            width: '70px',
            height: '70px',
            cursor: 'help',
          }}
          onClick={() => window.open('https://github.com/hajar-assim', '_blank')}
        />
      </div>
    </div>
  );
}

export default Contact;
