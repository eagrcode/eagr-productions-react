// hooks
import { useState } from "react";
// data
import tracks from "../../tracksData";
// components
import AudioControls from "../AudioControls/AudioControls";
// libraries
import { motion, AnimatePresence } from "framer-motion";

function AudioPlayer() {
  // state
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // data destructure
  const { title, artist, audioSrc, image, service } = tracks[trackIndex];

  // to previous track
  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  // to next track
  const toNextTrack = () => {
    if (trackIndex < tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

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
      />
    </div>
  );
}

export default AudioPlayer;
