'use client'

import { useDark } from '@/app/hooks/useDark'
import { themes } from '@/app/lib/definitions'
import Sun from './sun'
import Moon from './moon'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function DarkModeButton () {
  const { toggleTheme } = useDark()
  const { resolvedTheme } = useTheme()
  const curentTheme: string | undefined = resolvedTheme
  let mounted: any
  let setMounted: any;
  [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  })

  if (!mounted) {
    return null
  }

  return (
        <>
            {(curentTheme?.toString() === themes.dark)
              ? (<Sun handle={() => { toggleTheme(themes.light) }}></Sun>)
              : (<Moon handle={() => { toggleTheme(themes.dark) }}></Moon>)
            }
        </>
  )
}
