import './App.css';

function Heading(props) {
  const title = props.title;
  return <h1>{title}</h1>
};

function SongPlayer(props) {
  const showControls = props.showControls;
  const audioUrl = props.audioUrl;
  return (
    <>
      <Heading title='Music Player'/>
      <audio controls={showControls} >
        <source src={audioUrl} />
      </audio>
    </>
  );
};


function App() {
  return (
    <div className="App">
      <SongPlayer showControls audioUrl="https://examples.devmastery.pl/assets/audio/deadfro5h.mp3"/>
    </div>
  );
};

export default App;
