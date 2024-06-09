
import React from "react";

export default function LinkSeeAll(prop:{
  url:string
}) {
  return (
    <a
      target='blank'
      href={prop.url}
      className="hover:bg-gray-100 rounded-md dark:hover:bg-gray-700 w-20 text-center"
    >
      See All
    </a>
  );
}
