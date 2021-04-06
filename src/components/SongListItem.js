import './SongListItem.css';

export function SongListItem({ song, isCurrent, onSelect }) {
  function handleClick() {
    onSelect(song);
  };
  return (
    <li className={`SongListItem ${isCurrent ? "selected" : ""}`} onClick={handleClick}>
      <b>{song.artist}</b> - <i>{song.title}</i>
    </li>
  );
}
