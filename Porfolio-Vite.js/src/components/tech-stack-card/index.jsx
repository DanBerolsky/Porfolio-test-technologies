import React from 'react';
import './index.css';

export default function TechStack({prop}){
  return (
    <div className='tech-card card'>
      <h5 className='tech-card__title'>Tech stack</h5>
      <div className='tech-card__items'>
        {prop.map((techName, i) => (
          <div key={i}>{techName}</div>
        ))}
      </div>
    </div>
  );
};
