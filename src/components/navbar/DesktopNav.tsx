import React from 'react'
import { links } from '../../constants'
import Link from 'next/link'
import Button from '../Atoms/Button'


const DesktopNav = () => {
  return (
    <div className="flex gap-4 max-lg:hidden items-center">
    {links.map((link) => (
        <Link key={link.name} href={link.href} className="text-black font-medium dark:text-primary leading-[1em]">
            {link.name}
        </Link>
    ))}
    <Button size="small" className="text-[16px] dark:text-white text-black dark:bg-transparent bg-white leading-[1em]">
        Get in Touch
    </Button>
</div>
  )
}

export default DesktopNav
