'use client'

import React, { useRef, useState } from 'react'
import { calendlyUrl, links } from '../../constants'
import NavItem from './navItem'

export const GetInTouch = () => {
  return (
    <a
      href={calendlyUrl}
      className="text-[16px] dark:text-white text-black dark:bg-[hsla(0,0%,10%,1)] leading-[1em] ml-1 relative hover:bg-gray-100 dark:hover:bg-[hsla(0,0%,13%,1)] dark:hover:text-white rounded-full px-4 py-3 border border-gray-200 dark:border-gray-800  cursor-pointer flex items-center gap-2 group bg-transparent "
    >
      {/* light small green dot  */}
      <div className="animate-pulse-green scale-100 w-[6px] h-[6px] bg-green-500 rounded-full mr-1"></div>
      <span className="relative z-10">Let&apos;s Talk</span>
    </a>
  )
}

const DesktopNav = () => {
  const [selected, setSelected] = useState<number | -1>(-1)
  const timeoutRef = useRef<number | null>(null)


  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
    setSelected(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setSelected(-1)
    }, 200)
  }

  return (
    <div className="flex gap-1 max-lg:hidden items-center">
      {links.map((link) => {
        const isSelected = selected === link.id
        return (
          <NavItem
            key={link.id}
            name={link.name}
            path={link.href}
            selected={isSelected}
            onMouseEnter={() => handleMouseEnter(link.id)}
            onMouseLeave={handleMouseLeave}
          />
        )
      })}
      {/* <GetInTouch /> */}
    </div>
  )
}

export default DesktopNav
