import { useRef, useState, useEffect } from 'react';
import { Heading } from './Heading';
import './SongPlayer.scss';

export function SongPlayer({ showControls = false, song }) {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  useEffect(() => {
    setIsPlaying(false);
    setIsPaused(false);
    setIsStopped(false);
  }, [audioUrl]);
  function handlePlay() {
    setIsPlaying(true);
    setIsPaused(false);
    setIsStopped(false);
    audioRef.current.play();
    
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
      <Heading title={`" ${song.title} "`} headingClassName="Heading" />
      <img width="250" height="250" src={coverUrl} alt="Song cover" />
      <audio key={audioUrl} ref={audioRef} controls={showControls}>
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
