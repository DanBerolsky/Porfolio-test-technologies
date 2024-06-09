import React from 'react';
import './index.css';
import DarkModeButton from './DarkModeButton';
import DownloadResume from './DownloadResume';

export default function Avatar({ prop }) {
  return (
    <div className='avatar-card card'>
      <div className='avatar-card__background-image'>
        <img src='/back.png' alt='background_image' width={200} height={60} />
        <DarkModeButton />
      </div>
      <img
        className='avatar-card__img'
        src={prop.avatarImageURL}
        alt={prop.name}
        height={80}
        width={80}
        quality={50}
      />
      <h5 className='avatar-card__name'>{prop.name}</h5>
      <div className='avatar-card__info'>{prop.description}</div>
      <DownloadResume resumenURL={prop.resumenURL} />
    </div>
  );
}
