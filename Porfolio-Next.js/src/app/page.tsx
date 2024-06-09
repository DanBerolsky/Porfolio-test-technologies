import Avatar from '@/app/ui/avatar-card';
import Education from '@/app/ui/Education-card/index';
import Info from '@/app/ui/info-card/index';
import Proyects from '@/app/ui/proyects-card/index';
import TechStack from '@/app/ui/tech-stack-card/index';
import SwiperCard from '@/app/ui/swiper-card2/index';
import { EducationData, Social } from './lib/definitions';
import { fetchConfig } from './lib/data';
import { Suspense } from 'react';


export default async function Page() {
  let configs = await fetchConfig();
  //setInterval(async ()=>{configs = await fetchConfig()},15000)
  if ((await configs) !== undefined) {
    return (
      <div className='mainConteiner'>
        <aside className='grid-cols-1 flex flex-col gap-2'>
          <Avatar profileData={configs.profile} />
          <Suspense>
            <Info infoData={configs.social as Social} />
          </Suspense>
          <TechStack techData={configs.skills} />
          <Education educationData={configs.education as EducationData[]} />
        </aside>
        <article className='grid-cols-2 flex flex-col gap-2'>
          <SwiperCard />
          <Proyects proyectsData={configs.listProyect} />
        </article>
      </div>
    );
  } else {
    return (
      <>
        <h1>ERROR</h1>
      </>
    );
  }
}
