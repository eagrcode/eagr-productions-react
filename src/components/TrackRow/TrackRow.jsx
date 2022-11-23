function TrackRow({ id, artist, title, image, onPlayPauseClick, selectTrack }) {
  return (
    <li
      // onClick={() => handleClick(id)}
      onClick={() => selectTrack(id)}
      className="track-row"
    >
      {`${artist} - ${title}`}
      <img
        className="artwork-sm"
        src={image}
        alt={`track artwork for ${title} by ${artist}`}
        key={image}
      />
    </li>
  );
}

export default TrackRow;
