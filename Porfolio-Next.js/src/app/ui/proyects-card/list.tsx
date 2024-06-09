'use client';

import Pagination from '@/app/ui/proyects-card/pagination';
import ProyectItem from './item';
import { LayoutProyects, type Proyect } from '@/app/lib/definitions';
import Error from './error';
import useParam from '@/app/hooks/useParam';
import {
  fetchProyectsPages,
  fixCurrentPage,
  sliceReposPerPage,
} from '@/app/lib/utils';
import clsx from 'clsx';
import { useState } from 'react';
import RowsLayout from './icons/rowsIcon';
import GridLayout from './icons/gridIcon';
import useLayoutList from '@/app/hooks/useLayoutList';
import Skeleton from './skeleton';

export default function List(prop: { repositories: Proyect[] }) {
  const [isLoading, setLoading] = useState(true);

  const ITEMS_PER_PAGE_ON_ROWS = 3;
  const ITEMS_PER_PAGE_ON_GRID = 4;
  const { layoutMode, setLayoutMode, ITEMS_PER_PAGE } = useLayoutList(
    updateListState,
    ITEMS_PER_PAGE_ON_GRID,
    ITEMS_PER_PAGE_ON_ROWS,
    setLoading
  );
  const [totalPages, setTotalPages] = useState(
    fetchProyectsPages(prop.repositories, ITEMS_PER_PAGE)
  );
  const [repositoriesPerPage, setRepositoriesPerPage] = useState(
    sliceReposPerPage(prop.repositories, totalPages, ITEMS_PER_PAGE)
  );

  let currentPage = fixCurrentPage({
    currentPage: Number(useParam('page')),
    totalPages: totalPages,
  });
  /* 'flex flex-wrap gap-10' */
  const className = clsx('px-8 pb-12 pt-0  max-lg:flex-col ', {
    'flex gap-10': layoutMode === LayoutProyects.gridLayout,
    'flex flex-col gap-[40px] basis-auto':
      layoutMode === LayoutProyects.rowsLayout,
  });
  function layoutHandle() {
    layoutMode == LayoutProyects.gridLayout
      ? toggleLayout(ITEMS_PER_PAGE_ON_ROWS, LayoutProyects.rowsLayout)
      : toggleLayout(ITEMS_PER_PAGE_ON_GRID, LayoutProyects.gridLayout);
  }

  function updateListState(ITEMS_PER_PAGE: number) {
    const totalPagesAux = fetchProyectsPages(prop.repositories, ITEMS_PER_PAGE);
    setTotalPages(totalPagesAux);
    setRepositoriesPerPage(
      sliceReposPerPage(prop.repositories, totalPagesAux, ITEMS_PER_PAGE)
    );
  }

  function toggleLayout(itemsPerPage: number, layout: LayoutProyects) {
    updateListState(itemsPerPage);
    setLayoutMode(layout);
    window.localStorage.setItem('repoLayout', layout);
  }
  
  if (isLoading) return <Skeleton />;

  return (
    <div className='relative flex flex-col content-between grow justify-between pt-12'>
      <button
        aria-label='layout button'
        className='absolute right-11 -top-2 max-lg:hidden rounded-full p-4 border flex items-center justify-center hover:border-black dark:fill-white hover:bg-[rgba(266,266,266,.75)] hover:!fill-black'
        onClick={() => layoutHandle()}
      >
        {layoutMode === LayoutProyects.gridLayout ? (
          <RowsLayout />
        ) : (
          <GridLayout />
        )}
      </button>
      <div className={className}>
        {prop.repositories.length < 1 && repositoriesPerPage.length < 1 ? (
          <Error />
        ) : layoutMode === LayoutProyects.gridLayout ? (
          <>
            <div className='flex grow h-fit basis-[min-content] gap-10 flex-col'>{(
              repositoriesPerPage[currentPage - 1].slice(0,2).map((item: Proyect) => {
            return <ProyectItem key={item.id} {...item}></ProyectItem>;
          }))}
          </div>
            <div className='flex h-fit flex-col grow basis-[min-content] gap-10'>{(
              repositoriesPerPage[currentPage - 1].slice(2).map((item: Proyect) => {
            return <ProyectItem key={item.id} {...item}></ProyectItem>;
          }))}</div>
          </>
        ) : (
          repositoriesPerPage[currentPage - 1].map((item: Proyect) => {
            return <ProyectItem key={item.id} {...item}></ProyectItem>;
          })
        )}
      </div>
      <div className='mb-5 mt-5 flex w-full justify-center'>
        {repositoriesPerPage.length > 1 && (
          <Pagination totalPages={totalPages} />
        )}
      </div>
    </div>
  );
}
