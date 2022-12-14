import React from 'react';
import './style.css';
import jelee from './jelee.png';

export default function Header() {
  return (
    <div className='header'>
      <p className='title'>
        <img className='img' src={jelee} alt=''></img>
        <span>JELEE's To-do List</span>
      </p>
      <span>React</span>
    </div>
  );
}
