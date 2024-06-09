import React from 'react';
import './App.css';
import Avatar from './avatar-card';
import Education from './Education-card';
import Info from './info-card';
import Proyects from './proyects-card';
import TechStack from './tech-stack-card';
import SwiperCard from './swiper-card2';
import configs from '../mock/configs.json';

export function App() {
  return (
    <>
      <div className='mainConteiner'>
        <aside className='grid-cols-1 flex flex-col gap-2'>
          <Avatar prop={configs.profile} />
          <Info prop={configs.social} />
          <TechStack prop={configs.skills} />
          <Education prop={configs.education} />
        </aside>
        <article className='grid-cols-2 flex flex-col gap-2'>
          <SwiperCard />
          <Proyects prop={configs.listProyect} />
        </article>
      </div>
    </>
  );
}
