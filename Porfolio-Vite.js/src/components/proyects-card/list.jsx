import React from 'react';
import ProyectItem from './item';
import Error from './error';
import clsx from 'clsx';

export default function List(prop) {
  const className = clsx(
    'px-8 pb-12 pt-0  max-lg:flex-col flex flex-col gap-[40px] basis-auto'
  );

  return (
    <div className='relative flex flex-col content-between grow justify-between pt-12'>
      <div className={className}>
        {prop.repositories.length < 1 ? (
          <Error />
        ) : (
          prop.repositories.map((item) => {
            return <ProyectItem key={item.id} props={item}></ProyectItem>;
          })
        )}
      </div>
    </div>
  );
}
