'use client';

import { Social } from '@/app/lib/definitions';
import './index.css';
import {
  contactGithubEvent,
  contactLinkedinEvent,
  contactGmailEvent,
} from '@/app/lib/reactGA';
import Link from 'next/link';
import LinkIcon from './icons/linkIcon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import GitIcon from './icons/gitIcon';
import LinkedinIcon from './icons/linkedinIcon';
import LocationIcon from './icons/locationIcon';
import EmailIcon from './icons/emailIcon';
import CopyIcon from './icons/copyIcon';
import { setLazyProp } from 'next/dist/server/api-utils';
import { useState } from 'react';

export default function Info(prop: { infoData: Social }) {
  const [showModal, setShowModal] = useState(true)
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  function copyEmail() {
    contactGmailEvent();
    if (showModal) {
      const newParams = new URLSearchParams(searchParams.toString());
      newParams.set('modal', 'true');
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
      setShowModal(false)
      setTimeout(()=>{setShowModal(true)},6000)  
    }
    setLazyProp
    if (navigator && 'clipboard' in navigator) {
      navigator.clipboard.writeText('berolskydan@gmail.com');
    } else {
      document.execCommand('copy', true, 'berolskydan@gmail.com');
    }
  }

  const cat = [
    {
      title: 'Github',
      value: prop.infoData.dev,
      icon: <GitIcon />,
      link: prop.infoData.gitHub,
      GAEvent: contactGithubEvent,
    },
    {
      title: 'LinkedIn',
      value: prop.infoData.dev,
      icon: <LinkedinIcon />,
      link: prop.infoData.linkedin,
      GAEvent: contactLinkedinEvent,
    },
    {
      title: 'Based in',
      value: prop.infoData.BasedIn,
      icon: <LocationIcon />,
    },
    {
      title: 'Email',
      value: prop.infoData.email,
      icon: <EmailIcon />,
      GAEvent: copyEmail,
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
              onClick={info.GAEvent}
              className={clsx({
                'active:!text-[--text-secondary-color] hover:!text-[--text-secondary-color] hover:!bg-transparent':
                  !info.copy && !info.link,
              })}
            >
              {info.link && (
                <>
                  <Link
                    target='blank'
                    className='contact-link'
                    aria-label={info.title}
                    href={info.link}
                  ></Link>
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
                className={clsx('!line-clamp-1',{
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
