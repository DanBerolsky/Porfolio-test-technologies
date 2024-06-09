'use client';

import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

function ModalCopied() {
  const [animation, setAnimation] = useState({ flyUp: false, flyDown: false });
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());
  newParams.delete('modal');

  let modal = searchParams.get('modal') ? true : false;
  modal = searchParams.get('modal') ? true : false;
  useEffect(() => {
    if (modal) {
      setAnimation((prevState) => ({ ...prevState, flyUp: true }));
      router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
      setTimeout(() => {
        setAnimation({ flyUp: false, flyDown: true });
        setTimeout(() => {
          setAnimation((prevState) => ({ ...prevState, flyDown: false }));
        },2000);
      }, 2500);
    }
  }, [modal]);

  if (animation.flyDown) {
    return (
      <dialog className='fixed animate-fly-down rounded-md bottom-[17px] mx-3 w-auto h-fit bg-green-600 z-50 overflow-auto flex justify-center items-center'>
        <span className='p-2'>Copied!!</span>
      </dialog>
    );
  }
  else if (animation.flyUp) {
    return (
      <dialog className='fixed animate-fly-up rounded-md -bottom-[40px] mx-3 w-auto h-fit bg-green-600 z-50 overflow-auto flex justify-center items-center'>
        <span className='p-2'>Copied!</span>
      </dialog>
    );
  }else if (!animation.flyUp && !animation.flyDown){
    return(
      <dialog className='fixed rounded-md -bottom-[20px] mx-2 w-auto h-fit bg-green-600 z-50 overflow-auto flex justify-center items-center'>
        <span className='p-2'></span>
      </dialog>
    )
  }
}

export default ModalCopied;
