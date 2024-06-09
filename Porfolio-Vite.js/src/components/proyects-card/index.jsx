import './index.css';
import ListOfProyect from './list';
import LinkSeeAll from './LinkSeeAll';
import { Suspense } from 'react';
import React from 'react';
import repositoriesMock from '../../mock/repoProyects.json';
export default function Proyects({ prop }) {
  const repositories = repositoriesMock;
  return (
    <div className='relative proyects-card card flex flex-col'>
      <div className='head-container'>
        <h5>GitHub Proyects</h5>
        <LinkSeeAll url={prop.seeAllBtn.href} />
      </div>
      <Suspense>
        <ListOfProyect repositories={repositories}></ListOfProyect>
      </Suspense>
    </div>
  );
}
