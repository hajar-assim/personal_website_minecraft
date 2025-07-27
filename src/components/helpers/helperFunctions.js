export const clickSound = new Audio('/assets/background/music/minecraft_click_trimmed.m4a');
export const playClickSound = () => {
  clickSound.currentTime = 0;
  clickSound.play().catch((error) => {
    console.error('Error playing click sound:', error);
  });
};