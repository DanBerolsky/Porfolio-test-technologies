import './index.css';
import { getGithubProyects } from '@/app/lib/data';
import ListOfProyect from './list';
import LinkSeeAll from './LinkSeeAll';
import { Suspense } from 'react';
export default async function Proyects(prop: { proyectsData: any }) {
  const repositories = await getGithubProyects(prop.proyectsData.API);
  return (
    <div className='relative proyects-card card flex flex-col'>
      <div
        id='proyects-card'
        style={{ top: '-19px', position: 'absolute' }}
      ></div>
      <div className='head-container'>
        <h5>GitHub Proyects</h5>
        <LinkSeeAll url={prop.proyectsData.seeAllBtn.href} />
      </div>
      <Suspense>
        <ListOfProyect repositories={repositories}></ListOfProyect>
      </Suspense>
    </div>
  );
}
