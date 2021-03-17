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
      <audio controls={showControls}>
        <source src={audioUrl} />
      </audio>
    </>
  );
};


function App() {
  const currentSong = {
    audioUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.mp3",
    coverUrl: "https://examples.devmastery.pl/assets/audio/deadfro5h.jpg",
    title: "Deadfro5h",
    artist: "starfrosh"
  };
  return (
    <div className="App">
      <SongPlayer 
        song = {currentSong}
      />
    </div>
  );
};

export default App;
