'use client'

import { themes } from '../lib/definitions'
import { togglethemeEvent } from '../lib/reactGA'
import { useTheme } from 'next-themes'

export function useDark () {
  const { setTheme } = useTheme()

  function toggleTheme (mode: themes) {
    setTheme(mode)
    togglethemeEvent()
  }
  return ({ toggleTheme })
}
