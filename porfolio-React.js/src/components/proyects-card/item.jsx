import React from 'react';
//import { useRef, useState } from 'react';

export default function Item({props}) {
  /* const [toggleTruncateText, setToggleTruncateText] = useState(false); */
   return (
    <div className='proyects__item shadow-xl card dark:bg-violet min-h-[190.457px]'>
      <div className='proyects__item-title-container'>
        <svg aria-label='github' height='16' viewBox='0 0 14 14' width='16'>
          <path d='M7 .175c-3.872 0-7 3.128-7 7 0 3.084 2.013 5.71 4.79 6.65.35.066.482-.153.482-.328v-1.181c-1.947.415-2.363-.941-2.363-.941-.328-.81-.787-1.028-.787-1.028-.634-.438.044-.416.044-.416.7.044 1.071.722 1.071.722.635 1.072 1.641.766 2.035.59.066-.459.24-.765.437-.94-1.553-.175-3.193-.787-3.193-3.456 0-.766.262-1.378.721-1.881-.065-.175-.306-.897.066-1.86 0 0 .59-.197 1.925.722a6.754 6.754 0 0 1 1.75-.24c.59 0 1.203.087 1.75.24 1.335-.897 1.925-.722 1.925-.722.372.963.131 1.685.066 1.86.46.48.722 1.115.722 1.88 0 2.691-1.641 3.282-3.194 3.457.24.219.481.634.481 1.29v1.926c0 .197.131.415.481.328C11.988 12.884 14 10.259 14 7.175c0-3.872-3.128-7-7-7z'></path>
        </svg>
        <h6 className='item__proyect-name line-clamp-1'> {props.name}</h6>
        <div className='grow flex flex-row-reverse m-4 self-start'>
          <svg className='' height='24' viewBox='0 -960 960 960' width='24'>
            <path d='m136-240-56-56 212-212q35-35 85-35t85 35l46 46q12 12 28.5 12t28.5-12l178-178H640v-80h240v240h-80v-103L621-405q-35 35-85 35t-85-35l-47-47q-11-11-28-11t-28 11L136-240Z' />
          </svg>
        </div>
      </div>
      <a
        target='_blank'
        href={props.html_url}
        className='absolute w-full h-full z-10'
      ></a>
      <div className='item__proyect-branches '>
        <div className='flex'>
          <svg viewBox='0 0 512 512'>
            <path d='M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z' />
          </svg>
          <span className='text-ellipsis min-w-4 !max-w-[34px] inline-block overflow-hidden'>
            {props.stargazers_count}
          </span>
          <svg viewBox='0 0 512 512'>
            <path d='M416 160a64 64 0 10-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 10-64 0v209.22a64 64 0 1064.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 00416 160zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z' />
          </svg>
          <span className='text-ellipsis !max-w-[34px] inline-block overflow-hidden'>
            {props.forks}
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span
            className='repo-language-color'
            style={{ background: props.languageColor }}
          >
            &nbsp;
          </span>
          <span className='dark:text-[--text-primary-color]'>
            {props.language}
          </span>
        </div>
      </div>
    </div>
  );
}
