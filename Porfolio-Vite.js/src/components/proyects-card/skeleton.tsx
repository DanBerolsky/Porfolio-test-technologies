import React from 'react';
import ItemSkeleton from './itemSkeleton';
export default function skeleton() {
  return (
    <div className='relative flex flex-col content-between grow justify-between pt-10 '>
      <div className='flex flex-wrap gap-10 px-8 pb-12 pt-0'>
        <ItemSkeleton></ItemSkeleton>
        <ItemSkeleton></ItemSkeleton>
        <ItemSkeleton></ItemSkeleton>
        <ItemSkeleton></ItemSkeleton>
      </div>
    </div>
  );
}
