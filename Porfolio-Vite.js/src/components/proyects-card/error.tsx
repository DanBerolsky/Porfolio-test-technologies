import React from 'react';

export default function Error() {
  return (
    <div
      className='grow-1 min-w-max h-screen rounded-lg flex items-start basis-full'
      style={{
        background: 'var(--body-color)',
        color: 'var(--text-secondary-color)',
      }}
    >
      <svg
        style={{ fill: 'var(--text-secondary-color)' }}
        className='w-20 m-16'
        viewBox='0 0 512 512'
      >
        <path
          d='M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z'
          fill='none'
          stroke='currentColor'
          strokeMiterlimit='10'
          strokeWidth='32'
        />
        <path
          d='M250.26 166.05L256 288l5.73-121.95a5.74 5.74 0 00-5.79-6h0a5.74 5.74 0 00-5.68 6z'
          fill='none'
          stroke='currentColor'
          strokeLinejoin='round'
          strokeWidth='32'
        />
        <path d='M256 367.91a20 20 0 1120-20 20 20 0 01-20 20z' />
      </svg>
      <h4 style={{ marginTop: '5.5rem' }}>
        Something went wrong, please try again later
      </h4>
    </div>
  );
}
