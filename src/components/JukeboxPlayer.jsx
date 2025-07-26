import React, { useRef, useState, useEffect } from 'react';
import { renderFormattedTooltip, tooltipStyle } from '../helpers/TextStyling';

const records = [
  {
    id: 1,
    title: 'Idea22',
    audio: '/assets/background/music/idea_22.mp3',
  },
  {
    id: 2,
    title: "Merry-Go-Round of Life \nHowl's Moving Castle",
    audio: '/assets/background/music/howls_moving_castle.mp3',
  },
  {
    id: 3,
    title: "Comptine d'un autre été - Amélie",
    audio: '/assets/background/music/comptine.mp3',
  },
  {
    id: 4,
    title: 'Chopin - Nocturne op.9 No.2',
    audio: '/assets/background/music/chopin.mp3',
  },
  {
    id: 5,
    title: 'Do what you are doing',
    audio: '/assets/background/music/do.mp3',
  },
];

const clickSound = new Audio('/assets/background/music/minecraft_click.mp3');

const JukeboxPlayer = ({ backgroundAudioRef }) => {
  const iconSize = 16 * 4.5; // replace 4.5 with scale after
  const audioRef = useRef(null);
  const [hoveredRecord, setHoveredRecord] = useState(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !backgroundAudioRef?.current) return;

    const handleEnded = () => {
      backgroundAudioRef.current.play().catch(() => {});
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, []);

  const playAudio = (audioPath) => {
    if (backgroundAudioRef?.current) {
      backgroundAudioRef.current.pause();
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = audioPath;
      audioRef.current.play().catch(() => {});
    }
  };

  const stopAudio = () => {
    clickSound.currentTime = 0;
    clickSound.play().catch(() => {});

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (backgroundAudioRef?.current) {
      backgroundAudioRef.current.play().catch(() => {});
    }
  };

  const handleDrop = (e) => {
    const recordId = e.dataTransfer.getData('record-id');
    const droppedRecord = records.find((r) => r.id.toString() === recordId);
    if (droppedRecord) {
      playAudio(droppedRecord.audio);
    }
  };

  const allowDrop = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginTop: '2rem' }}>
      {/* Records */}
      <div style={{ display: 'flex', gap: '1rem' }}>
        {records.map((record) => (
          <div
            key={record.id}
            draggable
            onDragStart={(e) => e.dataTransfer.setData('record-id', record.id)}
            onMouseEnter={() => setHoveredRecord(record.id)}
            onMouseLeave={() => setHoveredRecord(null)}
            style={{
              width: `${iconSize}px`,
              height: `${iconSize}px`,
              position: 'relative',
              cursor: 'grab',
            }}
          >
            <img
              className="record"
              src={`/assets/icons/music_disc_${record.id}.png`}
              alt={record.title}
              style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}
            />
            {hoveredRecord === record.id && (
              <div
                style={{
                  ...tooltipStyle,
                  top: '110%',
                  bottom: 'unset',
                  width: 'fit-content',
                  whiteSpace: 'nowrap',
                  minWidth: 'unset',
                  maxWidth: 'unset',
                }}
              >
                {renderFormattedTooltip(`§9${record.title}`)}
              </div>
            )}
          </div>
        ))}
      </div>
      <img
        src={`/assets/ui/right_arrow.png`}
        alt={'arrow'}
        style={{
          width: `${iconSize + 20}px`,
          height: `${iconSize - 20}px`,
          imageRendering: 'pixelated',
        }}
      />
      {/* Jukebox*/}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <div
          onDrop={handleDrop}
          onDragOver={allowDrop}
          style={{
            width: '90px',
            height: '90px',
            backgroundImage: 'url(/assets/icons/jukebox_top.png)',
            backgroundSize: 'cover',
            imageRendering: 'pixelated',
            border: '2px dashed #aaa',
            position: 'relative',
          }}
        >
          <audio ref={audioRef} />
        </div>
      </div>

      <img
        src="/assets/icons/stop_button.png"
        alt="Stop Disc"
        onClick={stopAudio}
        style={{
          width: '50px',
          height: '50px',
          cursor: 'pointer',
          imageRendering: 'pixelated',
          userSelect: 'none',
        }}
      />
    </div>
  );
};

export default JukeboxPlayer;
