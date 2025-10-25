import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Crafting from './Crafting';
import SearchPanel from './SearchPanel';

function Experience() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const tag = event.target.tagName.toLowerCase();
      const isTyping = tag === 'input' || tag === 'textarea' || event.target.isContentEditable;

      if (isTyping) return;

      if (event.key === 'e' || event.key === 'E') {
        setShowPopup((prev) => !prev);
      }
      if (event.key === 'Escape') {
        setShowPopup(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const popup = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.7)', // the dim background behind popup
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          padding: '1rem',
          backgroundColor: 'transparent',
          maxWidth: '90vw',
          maxHeight: '90vh',
        }}
      >
        <SearchPanel onSelectExperience={setSelectedExperience} />
        <Crafting selectedExperience={selectedExperience} />
      </div>
    </div>
  );

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <img
            src="./assets/icons/bee.gif"
            alt="search"
            style={{ width: '100px', height: '100px' }}
          />
          <p>Press 'E' to craft...</p>
        </div>
      </div>

      {showPopup && typeof window !== 'undefined' && ReactDOM.createPortal(popup, document.body)}
    </>
  );
}

export default Experience;
