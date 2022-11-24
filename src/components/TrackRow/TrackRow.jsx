function TrackRow({
  id,
  artist,
  title,
  image,
  selectTrack,
  isPlaying,
  currentTrack,
}) {
  return (
    <li
      onClick={() => selectTrack(id)}
      className={`track-row ${
        isPlaying && currentTrack === id ? "active" : ""
      }`}
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
