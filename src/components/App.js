import { useState, useEffect } from 'react';
import { Heading } from './Heading';
import { SongPlayer } from './SongPlayer';
import { Songs } from './Songs';
import { SongListItem } from './SongListItem';

import './App.scss';

export function App() {
  const URL = "https://examples.devmastery.pl/songs-api/songs";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs)
      }
    })
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];
  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  };
  return (
    <div className="App">
      {songs.length === 0 ? "Loading..." : (
        <>
          <h1>Song Player</h1>
          <SongPlayer 
            song = {currentSong}
          />
          <Songs>
              <Heading title={"Songs"} headingClassName="songsHeading" />
              <ul>{songs.map(song => 
                <SongListItem 
                  key={song.audioUrl}
                  song={song}
                  isCurrent={currentSong.audioUrl === song.audioUrl}
                  onSelect={handleSelectSong} />
              )}</ul>
            </Songs>
        </>)
      }
    </div>
  );
};
