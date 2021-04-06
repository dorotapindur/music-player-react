import './SongListItem.css';

export function SongListItem({ song, isCurrent, onSelect }) {
  function handleClick() {
    onSelect(song);
  };
  return (
    <li className={`SongListItem ${isCurrent ? "selected" : ""}`} onClick={handleClick}>
      <p><b>{song.artist}</b> - <i>{song.title}</i></p>
    </li>
  );
}
