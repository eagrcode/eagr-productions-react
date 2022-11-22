import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

function AudioControls({ isPlaying, setIsplaying }) {
  return (
    <div className="audio-controls">
      <button type="button" className="prev" aria-label="Previous">
        <FaBackward size={30} />
      </button>
      {isPlaying ? (
        <button type="button" className="pause" aria-label="Pause">
          <FaPause size={30} />
        </button>
      ) : (
        <button type="button" className="play" aria-label="Play">
          <FaPlay size={30} />
        </button>
      )}
      <button type="button" className="next" aria-label="Next">
        <FaForward size={30} />
      </button>
    </div>
  );
}

export default AudioControls;