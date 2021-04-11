import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  console.log(process.env.PUBLIC_URL);
  return (
    <div className='hero-container'>
        <video src={`${process.env.PUBLIC_URL}/videos/video-6.mp4`} autoPlay loop muted />
        <h1>SIMPLY BE</h1>
        <h2>Discover the deeper essence of YOU.</h2>

        <div className='hero-btns'>
            <Button
              className='btns'
              buttonStyle='btn--outline'
              buttonSize='btn--large'
            >
              SUBSCRIBE
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
