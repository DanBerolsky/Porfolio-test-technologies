import React from 'react';

export default function Sun({ handle = () => {} }) {
  return (
    <svg onClick={handle} viewBox='0 0 512 512'>
      <path
        fill='none'
        stroke='currentColor'
        strokeMiterlimit='10'
        strokeWidth='32'
        d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'
      />
      <circle
        cx='256'
        cy='256'
        r='80'
        fill='none'
        stroke='currentColor'
        strokeWidth='32'
      />
    </svg>
  );
}
