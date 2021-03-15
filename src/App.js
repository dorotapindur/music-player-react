import './App.css';

function Heading({ title }) {
  return <h1>{title}</h1>
};

function SongPlayer({ showControls = true, audioUrl }) {
  return (
    <>
      <Heading title='Music Player'/>
      <audio controls={showControls}>
        <source src={audioUrl} />
      </audio>
    </>
  );
};


function App() {
  return (
    <div className="App">
      <SongPlayer audioUrl="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3"/>
    </div>
  );
};

export default App;
