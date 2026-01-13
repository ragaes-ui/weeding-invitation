import React from 'react';
import { FaMusic, FaPause } from 'react-icons/fa';

const MusicPlayer = ({ audio, isPlaying, setIsPlaying }) => {
  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <button 
        onClick={togglePlay}
        className={`w-12 h-12 bg-white/80 backdrop-blur-sm text-stone-800 rounded-full shadow-lg flex items-center justify-center border border-stone-200 transition ${isPlaying ? 'animate-spin-slow' : ''}`}
      >
        {isPlaying ? <FaPause /> : <FaMusic />}
      </button>
    </div>
  );
};

export default MusicPlayer;