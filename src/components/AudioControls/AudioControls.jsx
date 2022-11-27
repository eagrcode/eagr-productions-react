import { FaPlay, FaPause, FaBackward, FaForward } from "react-icons/fa";

function AudioControls({
  isPlaying,
  setIsPlaying,
  onPrevClick,
  onNextClick,
  onPlayPauseClick,
  trackProgress,
  duration,
  intervalRef,
  setTrackProgress,
  audioRef,
  currentTime,
}) {
  const onScrub = (value) => {
    // Clear any timers already running
    audioRef.current.muted = true;
    clearInterval(intervalRef.current);
    currentTime = value;
    setTrackProgress(currentTime);
  };

  const onScrubEnd = () => {
    audioRef.current.muted = false;
    // If not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  const calculateCurrentTime = () => {
    let currentMinutes = parseInt(trackProgress / 60) % 60;
    const returnedMinutes =
      currentMinutes < 10 ? `0${currentMinutes}` : `${currentMinutes}`;
    let currentSeconds = parseInt(trackProgress % 60);
    const returnedSeconds =
      currentSeconds < 10 ? `0${currentSeconds}` : `${currentSeconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const calculateRemainingTime = () => {
    let remainingTime = Math.floor(duration - trackProgress);
    let remainingMinutes = parseInt(duration / 60) % 60;
    let remainingSeconds = parseInt(remainingTime % 60);
    const returnedRemainingSeconds =
      remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;
    return `${remainingMinutes}:${returnedRemainingSeconds}`;
  };

  return (
    <div className="audio-controls">
      <div className="audio-btns">
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
      <div className="progress-slider">
        <span className="current-time-text">
          {calculateCurrentTime(trackProgress)}
        </span>
        <input
          className="seek"
          type="range"
          value={trackProgress}
          step="1"
          min="0"
          max={duration ? duration : `${duration}`}
          onChange={(e) => onScrub(e.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
        />
        <span id="song-1-length">{calculateRemainingTime(duration)}</span>
      </div>
    </div>
  );
}

export default AudioControls;
