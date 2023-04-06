import React from 'react';
import styles from './LandingPage.module.css'
import VideoBackground from '../BackgroundVideo/BackgroundVideo';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const whereTo = () => navigate('/Home');

  return (
    <div className={styles.landingDiv}>
      <VideoBackground />
      <div className={styles.overlayContainer}>
        <div className={styles.landingContent}>
          <h1 className={styles.welcome}>Welcome to my Pokemon's App!</h1>
          <button className={styles.enterButton} onClick={whereTo}>
            Enter!
          </button>
          <h5 className={styles.madeBy}>Made by Julian Martinez</h5>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;