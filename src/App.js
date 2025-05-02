import React, { useEffect, useRef } from 'react';
import MinecraftHUD from './components/MinecraftHUD';
import './index.css';
import TabLayout from './components/TabLayout';

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const enableAudio = () => {
      if (audio) {
        audio.play().catch(() => {});
      }
      window.removeEventListener('click', enableAudio);
    };

    window.addEventListener('click', enableAudio);
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/assets/background_1.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: '8rem', left: 0, right: 0 }}>
        <TabLayout />
      </div>
      <MinecraftHUD />
      <audio ref={audioRef} src="/assets/background_music_c418.mp3" loop hidden />
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
          zIndex: -1,
        }}
      >
        <source src="/assets/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
