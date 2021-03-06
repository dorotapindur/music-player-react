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
  function handleRewind() {
    if (isPlaying) {
      audioRef.current.currentTime = audioRef.current.currentTime - 15;
      audioRef.current.play();
      console.log('RWD');
    }
    setIsPaused(false);
  }
  function handleForward() {
    if (isPlaying) {
      audioRef.current.currentTime = audioRef.current.currentTime + 15;
      audioRef.current.play();
      console.log('FWD');
    }
    setIsPaused(false);
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
        <button onClick={handleRewind} className="rewindForwardButton" alt="rewind 15 seconds">&#10877; 15"</button>
        <button onClick={handlePlay} className={playButtonClassName} >Play</button>
        <button onClick={handlePause} className={`SongPlayerButton ${(isPaused === true && isPlaying === true) ? "activeButton" : ""}`}>Pause</button>
        <button onClick={handleStop} className={`SongPlayerButton ${isStopped ? "activeButton" : ""}`}>Stop</button>
        <button onClick={handleForward} className="rewindForwardButton" alt="forward 15 seconds">15" &#10878;</button>
      </div>
    </section>
  );
}
;
