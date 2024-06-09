export default function ItemSkeleton() {
    const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent dark:before:via-violet/60 before:via-white/60 before:to-transparent';

  return (
    <div
      className={`proyects__item !basis-[43%] shadow-xl card ${shimmer}`}
    >
      <div>
        <div className='proyects__item-title-container'>
          <svg viewBox='0 0 512 512'>
            <path d='M16.08 189.4l28.58 233.87A28 28 0 0072.52 448h367a28 28 0 0027.86-24.73l28.54-233.87A12 12 0 00484 176H28a12 12 0 00-11.92 13.4zM464 124a28 28 0 00-28-28H244.84l-48-32H76a28 28 0 00-28 28v52h416z' />
          </svg>
          <h6 className={`item__proyect-name !ml-2 h-5 !w-[30%] rounded bg-gray-200 dark:dark:bg-gray-500`}></h6>
        </div>
        <div className='item__proyect-info !w-full flex flex-col gap-3'>
          <p className={`h-5 !w-[80%] rounded-md bg-gray-200 dark:dark:bg-gray-500`}></p>
          <p className={`h-5 !w-[48%] rounded-md bg-gray-200 dark:dark:bg-gray-500`}></p>
          <p className={`h-5 !w-[72%] rounded-md bg-gray-200 dark:dark:bg-gray-500`}></p>
        </div>
      </div>
      <div className='item__proyect-branches '>
        <div className='flex'>
          <svg viewBox='0 0 512 512'>
            <path d='M496 203.3H312.36L256 32l-56.36 171.3H16l150.21 105.4-58.5 171.3L256 373.84 404.29 480l-58.61-171.3z' />
          </svg>
          <span className="h-5 w-7 rounded bg-gray-200 !ml-1 dark:dark:bg-gray-500" ></span>
          <svg viewBox='0 0 512 512'>
            <path d='M416 160a64 64 0 10-96.27 55.24c-2.29 29.08-20.08 37-75 48.42-17.76 3.68-35.93 7.45-52.71 13.93v-126.2a64 64 0 10-64 0v209.22a64 64 0 1064.42.24c2.39-18 16-24.33 65.26-34.52 27.43-5.67 55.78-11.54 79.78-26.95 29-18.58 44.53-46.78 46.36-83.89A64 64 0 00416 160zM160 64a32 32 0 11-32 32 32 32 0 0132-32zm0 384a32 32 0 1132-32 32 32 0 01-32 32zm192-256a32 32 0 1132-32 32 32 0 01-32 32z' />
          </svg>
          <span className="h-5 w-7 rounded !ml-1 bg-gray-200 dark:dark:bg-gray-500"></span>
        </div>
        <div className='flex items-center gap-2'>
          <span
            className='repo-language-color'
            style={{ background: '#333' }}
          >
            &nbsp;
          </span>
          <span className='dark:text-[--text-primary-color] h-5 w-10 rounded bg-gray-200 dark:dark:bg-gray-500'></span>
        </div>
      </div>
    </div>
  );
}
