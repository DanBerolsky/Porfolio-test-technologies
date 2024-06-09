import React from 'react';
import ProyectItem from './item';
import Error from './error';
import clsx from 'clsx';
import { useState } from 'react';
import Skeleton from './skeleton';

export default function List(prop) {
  //const [isLoading, setLoading] = useState(true);

  const className = clsx('px-8 pb-12 pt-0  max-lg:flex-col flex flex-col gap-[40px] basis-auto');
  
  //if (isLoading) return <Skeleton />;

  return (
    <div className='relative flex flex-col content-between grow justify-between pt-12'>
      <div className={className}>
        {prop.repositories.length < 1? (
          <Error />
        ): (
          prop.repositories.map((item) => {
            console.log(item);
            return <ProyectItem key={item.id} props={item}></ProyectItem>;
          })
        )}
      </div>
    </div>
  );
}
