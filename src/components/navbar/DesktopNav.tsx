import React from 'react'
import { links } from '../../constants'
import Link from 'next/link'
import Button from '../Atoms/Button'
import { motion } from 'framer-motion'

const DesktopNav = () => {
  return (
    <div className="flex gap-1 max-lg:hidden items-center">
      {links.map((link) => (
        <Link key={link.name} href={link.href} className="text-black text-[18px] px-3 py-4 font-medium dark:text-primary leading-[1em] hover:bg-gray-100 dark:hover:bg-[hsla(0,0%,10%,1)] rounded-md">
          {link.name}
        </Link>
      ))}
      <Button size="large" className="text-[16px] dark:text-white text-black dark:bg-transparent leading-[1em] ml-1">
        Get in Touch
      </Button>
    </div>
  )
}

export default DesktopNav
