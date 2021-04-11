import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='/videos/video-6.mp4' autoPlay loop muted />
        <h1>SIMPLY BE</h1>
        {/*<span>YOU.</span>*/}
        <h2>Discover the deeper essence of YOU.</h2>

        <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              GET STARTED
            </Button>
            <Button
              className='btns'
              buttonStyle='btn--primary'
              buttonSize='btn--large'
              onClick={console.log('hey')}
            >
              WATCH TRAILER <i className='far fa-play-circle' />
            </Button>
        </div>
    </div>
  );
}

export default HeroSection;
