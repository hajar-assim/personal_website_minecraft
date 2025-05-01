import React from 'react';
import MinecraftHUD from './components/MinecraftHUD';
import './index.css';

function App() {
  return (
    <div className="relative min-h-screen bg-[url('/assets/background.jpg')] bg-cover">
      <MinecraftHUD />
    </div>
  );
}

export default App;
