'use client'

import Link from "next/link";
import { seeAllEvent } from '@/app/lib/reactGA'

export default function LinkSeeAll(prop:{
  url:string
}) {
  return (
    <Link
      target='blank'
      href={prop.url}
      onClick={seeAllEvent}
      className="hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 w-20 text-center"
    >
      See All
    </Link>
  );
}
