import React, { useRef, useEffect, useState } from 'react';

const ScrollablePanel = ({ children }) => {
  const scrollRef = useRef(null);
  const thumbRef = useRef(null);
  const [thumbTop, setThumbTop] = useState(0);
  const [dragging, setDragging] = useState(false);

  const updateThumbPosition = () => {
    const container = scrollRef.current;
    const thumb = thumbRef.current;
    if (!container || !thumb) return;

    const trackHeight = container.clientHeight - 16;
    const newTop = (container.scrollTop / container.scrollHeight) * trackHeight;

    setThumbTop(newTop);
    thumb.style.height = `55px`;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.addEventListener('scroll', updateThumbPosition);
    updateThumbPosition();
    return () => container.removeEventListener('scroll', updateThumbPosition);
  }, []);

  const handleMouseDown = (e) => {
    setDragging(true);
    const startYPos = e.clientY;
    const startScroll = scrollRef.current.scrollTop;
    e.preventDefault();

    const handleMouseMove = (e) => {
      const container = scrollRef.current;
      if (!container) return;

      const delta = e.clientY - startYPos;
      const scrollRatio = container.scrollHeight / container.clientHeight;
      container.scrollTop = startScroll + delta * scrollRatio;
    };

    const handleMouseUp = () => {
      setDragging(false);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '50%', display: 'flex' }}>
      <div
        ref={scrollRef}
        style={{
          flex: 1,
          overflowY: 'scroll',
          paddingRight: '2rem',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <style>{`::-webkit-scrollbar { display: none; }`}</style>
        <div style={{ paddingRight: '1rem', color: '#111', fontSize: '16px', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>

      <img
        ref={thumbRef}
        src="./assets/ui/scroller.png"
        alt="scroll"
        onMouseDown={handleMouseDown}
        style={{
          position: 'absolute',
          top: `${thumbTop}px`,
          right: '4px',
          width: '40px',
          cursor: dragging ? 'grabbing' : 'grab',
          imageRendering: 'pixelated',
          userSelect: 'none',
        }}
      />
    </div>
  );
};

export default ScrollablePanel;
