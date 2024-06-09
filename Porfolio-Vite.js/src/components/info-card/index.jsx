import './index.css';
import React from 'react';
import LinkIcon from './icons/linkIcon';
import clsx from 'clsx';
import GitIcon from './icons/gitIcon';
import LinkedinIcon from './icons/linkedinIcon';
import LocationIcon from './icons/locationIcon';
import EmailIcon from './icons/emailIcon';
import CopyIcon from './icons/copyIcon';

export default function Info({ prop }) {
  function copyEmail() {
    if (navigator && 'clipboard' in navigator) {
      navigator.clipboard.writeText('berolskydan@gmail.com');
    } else {
      document.execCommand('copy', true, 'berolskydan@gmail.com');
    }
  }

  const cat = [
    {
      title: 'Github',
      value: prop.dev,
      icon: <GitIcon />,
      link: prop.gitHub,
    },
    {
      title: 'LinkedIn',
      value: prop.dev,
      icon: <LinkedinIcon />,
      link: prop.linkedin,
    },
    {
      title: 'Based in',
      value: prop.BasedIn,
      icon: <LocationIcon />,
    },
    {
      title: 'Email',
      value: prop.email,
      icon: <EmailIcon />,
      copy: true,
    },
  ];

  return (
    <div className='info-card card'>
      {cat.map((info, i) => (
        <div key={i} className='info-card__item'>
          {info.icon}
          <div className='info-card__item-container'>
            <span className='!line-clamp-1'>{info.title} :</span>
            <div
              className={clsx({
                'active:!text-[--text-secondary-color] hover:!text-[--text-secondary-color] hover:!bg-transparent':
                  !info.copy && !info.link,
              })}
            >
              {info.link && (
                <>
                  <a
                    target='blank'
                    className='contact-link'
                    aria-label={info.title}
                    href={info.link}
                  ></a>
                  <LinkIcon />
                </>
              )}
              {info.copy && (
                <>
                  <div
                    className='!line-clamp-1 absolute w-full h-full z-10 cursor-pointer'
                    onClick={copyEmail}
                  ></div>
                  <CopyIcon />
                </>
              )}
              <div
                className={clsx('!line-clamp-1', {
                  'active:!text-[--text-secondary-color] hover:!text-[--text-secondary-color] hover:!bg-transparent':
                    !info.copy && !info.link,
                })}
              >
                {info.value}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
