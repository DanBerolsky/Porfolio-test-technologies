import React from 'react';
import './index.css';

export default function Education({ prop }) {
  return (
    <div className='education-card card'>
      <h5 className='education-card__title'>Education</h5>
      {prop.map((item, index) => (
        <div key={index} className='education-card__body'>
          <div></div>
          <span>{item.date}</span>
          <h5>{item.institution}</h5>
          <span>{item.degree}</span>
        </div>
      ))}
    </div>
  );
}
