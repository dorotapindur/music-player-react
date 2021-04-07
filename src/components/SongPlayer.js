import { useRef, useState } from 'react';
import { Heading } from './Heading';
import './SongPlayer.css';

export function SongPlayer({ showControls = false, song }) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  function handlePlay() {
    setIsPlaying(true);
    setIsPaused(false);
    setIsStopped(false);
    audioRef.current.play();
    console.log(isPlaying);
  }
  function handlePause() {
    setIsPaused(true);
    setIsStopped(false)
    audioRef.current.pause();
  }
  function handleStop() {
    setIsPlaying(false);
    setIsPaused(false);
    setIsStopped(true);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  }
  let playButtonClassName;
  if (isPlaying === true && isPaused === true) {
    playButtonClassName = 'SongPlayerButton blinkingButton';
  } else if (isPlaying) {
    playButtonClassName = 'SongPlayerButton activeButton';
  } else {
    playButtonClassName = 'SongPlayerButton';
  }
  return (
    <section className="SongPlayer">
      <Heading title={song.title} />
      <img width="250" height="250" src={coverUrl} alt="Song cover" />
      <audio ref={audioRef} controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button onClick={handlePlay} className={playButtonClassName} >Play</button>
        <button onClick={handlePause} className={`SongPlayerButton ${(isPaused === true && isPlaying === true) ? "activeButton" : ""}`}>Pause</button>
        <button onClick={handleStop} className={`SongPlayerButton ${isStopped ? "activeButton" : ""}`}>Stop</button>
      </div>
    </section>
  );
}
;
