import { useState } from "react";

import tracks from "../../tracksData";

import AudioControls from "../AudioControls/AudioControls";

function AudioPlayer() {
  // state
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // data destructure
  const { title, artist, audioSrc, image, service } = tracks[trackIndex];

  return (
    <div className="audio-player">
      <div className="track-info">
        <p>{service}</p>
        <img
          className="artwork"
          src={image}
          alt={`track artwork for ${title} by ${artist}`}
        />
        <p className="title">{title}</p>
        <p className="artist">{artist}</p>
      </div>
      <AudioControls isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default AudioPlayer;
