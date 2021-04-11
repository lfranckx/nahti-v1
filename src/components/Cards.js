import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Classes offered</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/sunset.jpg'
              text='Recharge your brain and create space in your mind'
              label='Meditation'
              path='/classes'
            />
            <CardItem
              src='images/yoga.jpg'
              text='Ease your tension here. Stay calm and read on.'
              label='Yoga'
              path='/classes'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/meditation.jpg'
              text='Daily cup of thoughts, inspiration, and philosophies.'
              label='Blog'
              path='/about'
            />
            <CardItem
              src='images/flower.jpg'
              text='View my full range of services'
              label='Classes'
              path='/classes'
            />
            <CardItem
              src='images/candles.jpg'
              text='Schedule a class or a 1:1 session with me'
              label='Schedule'
              path='/schedule'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
