import React from 'react';
import MinecraftHUD from './components/MinecraftHUD';
import './index.css';
import TabLayout from './components/TabLayout';

function App() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: "url('/assets/background.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div style={{ position: 'absolute', top: '8rem', left: 0, right: 0 }}>
        <TabLayout />
      </div>
      <MinecraftHUD />
    </div>
  );
}

export default App;
