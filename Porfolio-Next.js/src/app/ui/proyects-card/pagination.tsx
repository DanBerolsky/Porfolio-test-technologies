import clsx from 'clsx';
import Link from 'next/link';
import { fixCurrentPage, generatePagination } from '@/app/lib/utils';
import { usePathname, useSearchParams } from 'next/navigation';

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = fixCurrentPage({
    currentPage: Number(searchParams.get('page')) || 1,
    totalPages,
  });

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}#proyects-card`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <>
      <div className='inline-flex'>
        <PaginationArrow
          direction='left'
          href={createPageURL(currentPage - 1)}
          isDisabled={currentPage <= 1}
        />

        <div className='flex -space-x-px gap-2'>
          {allPages.map((page, index) => {
            let position: 'first' | 'last' | 'single' | 'middle' | undefined;

            if (index === 0) position = 'first';
            if (index === allPages.length - 1) position = 'last';
            if (allPages.length === 1) position = 'single';
            if (page === '...') position = 'middle';

            return (
              <PaginationNumber
                key={page}
                href={createPageURL(page)}
                page={page}
                position={position}
                isActive={currentPage === page}
              />
            );
          })}
        </div>

        <PaginationArrow
          direction='right'
          href={createPageURL(currentPage + 1)}
          isDisabled={currentPage >= totalPages}
        />
      </div>
    </>
  );
}

function PaginationNumber({
  page,
  href,
  isActive,
  position,
}: {
  page: number | string;
  href: string;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center text-sm border rounded-full text-color-secondary hover:border-black',
    {
      'z-10 card-color-article': isActive,
      'hover:bg-gray-100 hover:text-black': !isActive && position !== 'middle',
      'text-gray-300': position === 'middle',
    }
  );
  return isActive || position === 'middle' ? (
    <div className={className}>{page}</div>
  ) : (
    <Link aria-label={`page${page}`} className={className} href={href}>
      {page}
    </Link>
  );
}

function PaginationArrow({
  href,
  direction,
  isDisabled,
}: {
  href: string;
  direction: 'left' | 'right';
  isDisabled?: boolean;
}) {
  const className = clsx(
    'flex h-10 w-10 items-center justify-center rounded-full border hover:border-black',
    {
      'pointer-events-none text-gray-500 text-color-disabled': isDisabled,
      'hover:bg-gray-100 hover:text-black text-color-secondary border-violet-300':
        !isDisabled,
      'mr-2 md:mr-4': direction === 'left',
      'ml-2 md:ml-4': direction === 'right',
    }
  );

  const icon =
    direction === 'left' ? (
      <svg viewBox='0 0 512 512'>
        <path
          fill='none'
          stroke='currentColor'
          strokeWidth='48'
          d='M328 112L184 256l144 144'
        />
      </svg>
    ) : (
      <svg viewBox='0 0 512 512'>
        <path
          fill='none'
          stroke='currentColor'
          strokeWidth='48'
          d='M184 112l144 144-144 144'
        />
      </svg>
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link
      aria-label={`page-${direction}`}
      onClick={() => false}
      className={className}
      href={href}
    >
      {icon}
    </Link>
  );
}
