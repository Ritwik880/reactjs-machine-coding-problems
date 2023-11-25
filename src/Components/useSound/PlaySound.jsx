import React, { useState } from 'react';
import useSound from 'use-sound';
import music from '../../music/music.mp3';

const PlaySound = () => {
  const [volume, setVolume] = useState(100);
  const [play, { stop }] = useSound(music, { volume: volume / 100, autoplay: false });

  const increaseVolume = () => {
    // increase volume by 10%, but not exceeding 100%
    const newVolume = Math.min(volume + 10, 100);
    setVolume(newVolume);
  };

  const decreaseVolume = () => {
    // decrease volume by 10%, but not going below 0%
    const newVolume = Math.max(volume - 10, 0);
    setVolume(newVolume);
  };

  return (
    <section className='landing-section'>
      <div className='row container'>
        <div className='landing-div'>
          <button onClick={play} className='btn btn-primary'>
            Play Music
          </button>
          <button onClick={stop} className='btn btn-primary'>
            Stop Music
          </button>
          <div>
            <p>Volume: {volume}%</p>
            <button onClick={increaseVolume} className='btn btn-secondary'>
              Increase Volume
            </button>
            <button onClick={decreaseVolume} className='btn btn-secondary'>
              Decrease Volume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaySound;
