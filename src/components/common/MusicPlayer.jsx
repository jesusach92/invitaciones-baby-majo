import { useEffect, useRef, useState } from 'react';
import './styles/index.css';
import './styles/music-player.css'

import AudioCrossIcon from './Audio-cross-icon';
import AudioFullIcon from './Audio-full-icon';

export default function MusicPlayer() {
  const [volume, setVolume] = useState(0.5);
    const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);

    const toggleMusic = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
    setMuted(false);
  };


  const audioRef = useRef();

useEffect(() => {
  if (audioRef.current) {
    audioRef.current.volume = muted ? 0 : volume;
  }
}, [volume, muted]);


  return (
    <div className="audio-control">
      <audio ref={audioRef} src="/assets/music/pista.mp3" autoPlay loop />
       <button onClick={toggleMusic} className={`music-button ${playing ? 'playing' : ''}`}>
      <img src="/assets/svg/play-icon.svg" alt="Audio"/>
      </button>
      {muted || volume === 0 ? (
  <AudioCrossIcon functionToggle={() => setMuted(false)} />
) : (
  <AudioFullIcon functionToggle={() => setMuted(true)} />
)}<input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={muted ? 0 : volume}
        onChange={handleVolumeChange}
        className="volume-slider"
      />
    </div>
  );
}
