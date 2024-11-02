import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { FC } from 'react'

type MenuItemProps = {
    name: string
    path: string
    selected: boolean
    onClick?: () => void
    onMouseEnter?: () => void
    onMouseLeave?: () => void
    isAction?: boolean
}

const NavItem: FC<MenuItemProps> = ({
    name,
    path,
    selected,
    onClick,
    onMouseEnter,
    onMouseLeave,
}) => {
    return (
        <AnimatePresence>
            <motion.div
                className="relative cursor-pointer"
                onClick={onClick}
                onMouseOver={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <Link
                    href={path}
                    className="text-black dark:text-white  px-3 py-2"
                    aeria-label={name}>
                    {name}
                </Link>

                {selected && (
                    <motion.span
                        className="absolute bottom-[-5px] left-0 w-full bg-blue-500 h-[2px]"
                        layoutId="underline"
                        aria-hidden="true"
                        transition={{
                            type: 'spring',
                            bounce: 0.25,
                            stiffness: 130,
                            damping: 15,
                            duration: 0.3,
                        }}
                    />
                )}
            </motion.div>
        </AnimatePresence>
    )
}

export default NavItem