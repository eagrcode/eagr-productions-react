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
  const [tracksData, setTracksData] = useState(tracks);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // data destructure
  const { title, artist, audioSrc, image, service } = tracksData[currentTrack];

  // refs
  const audioRef = useRef();

  // logs

  // load audio duration
  const loadMetaData = () => {
    setDuration(audioRef.current.duration);
  };

  const updateCurrentTime = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // to previous track
  const toPrevTrack = () => {
    if (currentTrack - 1 < 0) {
      setCurrentTrack(tracksData.length - 1);
    } else {
      setCurrentTrack(currentTrack - 1);
    }
  };

  // to next track
  const toNextTrack = () => {
    if (currentTrack < tracksData.length - 1) {
      setCurrentTrack(currentTrack + 1);
    } else {
      setCurrentTrack(0);
    }
  };

  // select track from list
  const selectTrack = (id) => {
    setCurrentTrack(id);
    setIsPlaying(true);
  };

  // toggle play/pause audio
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      setCurrentTime(audioRef.current.currentTime);
      console.log(currentTime);
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  // play track on prev/next/select
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [currentTrack]);

  // map TrackRow component with tracksData
  const trackRows = tracksData.map((track) => (
    <TrackRow
      id={track.id}
      artist={track.artist}
      title={track.title}
      image={track.image}
      key={track.id}
      selectTrack={selectTrack}
      isPlaying={isPlaying}
      currentTrack={currentTrack}
    />
  ));

  return (
    <div className="audio-player">
      <AnimatePresence mode="wait" initial={false}>
        <div className="ap-top">
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

          <AudioControls
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            onPlayPauseClick={setIsPlaying}
            audioRef={audioRef}
            duration={duration}
            currentTime={currentTime}
          />
        </div>
      </AnimatePresence>
      <div className="ap-bottom">
        <p>Track List</p>
        <ul className="track-list">{trackRows}</ul>
      </div>
      <audio
        ref={audioRef}
        src={audioSrc}
        preload="metadata"
        onLoadedMetadata={loadMetaData}
        onTimeUpdate={updateCurrentTime}
      />
    </div>
  );
}

export default AudioPlayer;
