function TrackRow({ id, artist, title, image, handleClick }) {
  return (
    <li onClick={() => handleClick(id)} className="track-row">
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
