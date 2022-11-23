// hooks
import { useState, useRef, useEffect, useCallback } from "react";
// data
import tracks from "../../tracksData";
// components
import AudioControls from "../AudioControls/AudioControls";
import TrackRow from "../TrackRow/TrackRow";
// libraries
import { motion, AnimatePresence } from "framer-motion";

function AudioPlayer() {
  // state
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [tracksData, setTracksData] = useState(tracks);

  // data destructure
  const { title, artist, audioSrc, image, service } = tracksData[currentTrack];

  // refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  console.log(tracks[currentTrack]);
  console.log(audioRef.current);
  console.log(audioSrc);
  console.log(isPlaying);
  console.log(intervalRef);
  console.log(isReady.current);

  // to previous track
  const toPrevTrack = () => {
    if (currentTrack - 1 < 0) {
      setCurrentTrack(tracks.length - 1);
    } else {
      setCurrentTrack(currentTrack - 1);
    }
  };

  // to next track
  const toNextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      setCurrentTrack(currentTrack + 1);
    } else {
      setCurrentTrack(0);
    }
  };

  // toggle play/pause audio
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(intervalRef.current);
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // Pause and clean up on unmount
  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  // Handle setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();
    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current && isPlaying === true) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, [currentTrack]);

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  function handleClick(id) {
    console.log(id);
  }

  const trackRows = tracksData.map((track) => (
    <TrackRow
      id={track.id}
      artist={track.artist}
      title={track.title}
      image={track.image}
      key={track.id}
      handleClick={handleClick}
    />
  ));

  return (
    <div className="audio-player">
      <AnimatePresence mode="wait" initial={false}>
        <div className="track-info">
          <motion.p
            key={service}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {service}
          </motion.p>
          <motion.img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
            key={image}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
          />
          <motion.p
            className="title"
            key={title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {title}
          </motion.p>
          <motion.p
            className="artist"
            key={artist}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0 }}
          >
            {artist}
          </motion.p>
        </div>
      </AnimatePresence>
      <AudioControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        onPrevClick={toPrevTrack}
        onNextClick={toNextTrack}
        onPlayPauseClick={setIsPlaying}
      />
      <ul className="track-list">{trackRows}</ul>
      <audio src={audioSrc} preload="auto"></audio>
    </div>
  );
}

export default AudioPlayer;
