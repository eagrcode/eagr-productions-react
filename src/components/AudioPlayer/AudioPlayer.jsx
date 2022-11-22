// hooks
import { useState, useRef, useEffect } from "react";
// data
import tracks from "../../tracksData";
// components
import AudioControls from "../AudioControls/AudioControls";
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

  console.log(tracks[currentTrack]);
  console.log(audioRef.current);
  console.log(isPlaying);

  // to previous track
  const toPrevTrack = () => {
    if (currentTrack - 1 < 0) {
      setCurrentTrack(trackslength - 1);
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
  // useEffect(() => {
  //   if (isPlaying) {
  //     audioRef.current.play();
  //   } else {
  //     audioRef.current.pause();
  //   }
  // }, [isPlaying]);

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
    </div>
  );
}

export default AudioPlayer;
