import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

function AudioControls({
  isPlaying,
  setIsplaying,
  onPrevClick,
  onNextClick,
  onPlayPauseClick,
}) {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <FaBackward size={30} />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          aria-label="Pause"
          onClick={() => onPlayPauseClick(false)}
        >
          <FaPause size={30} />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          aria-label="Play"
          onClick={() => onPlayPauseClick(true)}
        >
          <FaPlay size={30} />
        </button>
      )}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
      >
        <FaForward size={30} />
      </button>
    </div>
  );
}

export default AudioControls;
