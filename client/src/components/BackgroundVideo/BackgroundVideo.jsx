import React, { useRef, useEffect } from 'react';
import style from './BackgroundVideo.module.css';
import background from '../../imageUtils/Horizon_v1_Trim.mp4';

function VideoBackground() {
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

  return (
    <video
      ref={videoRef}
      className={style.VideoBackground}
      src={background}
      autoPlay
      loop
      muted
    />
  );
}

export default VideoBackground;