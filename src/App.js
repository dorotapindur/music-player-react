import './App.css';

function Heading({ title }) {
  return <h1>{title}</h1>
};

function SongPlayer({ showControls = true, song }) {
  const { audioUrl, coverUrl } = song;
  return (
    <>
      <Heading title='Music Player'/>
      <img width="250" height="250" src={coverUrl} alt="Song cover"/>
      <audio key={audioUrl} controls={showControls}>
        <source src={audioUrl} />
      </audio>
    </>
  );
};

function SongListItem({ song }) {
  return (
    <li>
      {song.title} by {song.artist}
    </li>
  )
}

function App() {
  const songs = [
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
      title: "Deadfro5h",
      artist: "starfrosh"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/majesty.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/majesty.jpg",
      title: "Majesty (Original Mix)",
      artist: "Ryan Craig Martin"
    },
    {
      audioUrl: "https://examples.devmastery.pl/assets/audio/runs.mp3",
      coverUrl: "https://examples.devmastery.pl/assets/audio/runs.jpg",
      title: "Runs",
      artist: "Wowa"
    }
  ];
  const currentSong = songs[0];
  return (
    <div className="App">
      <SongPlayer 
        song = {currentSong}
      />
      <section>
        <Heading title={"Songs"} />
        <ul>{songs.map(song => 
          <SongListItem 
            key={song.audioUrl}
            song={song} />
        )}</ul>
      </section>
    </div>
  );
};

export default App;
