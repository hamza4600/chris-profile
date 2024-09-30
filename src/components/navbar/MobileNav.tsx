'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../Atoms/Button';
import { links } from '../../constants';

const MobileNav: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <div className="lg:hidden">
            <button onClick={toggleMenu} className="z-50 relative">
                <motion.svg
                    className={'z-[5000] relative'}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.path
                        d={isOpen ? "M6 6L18 18" : "M3 6H21"}
                        className={'dark:stroke-white stroke-black'}
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transition={{ duration: 0.3 }}
                    />
                    <motion.path
                        d={isOpen ? "M18 6L6 18" : "M3 18H21"}
                        className={'dark:stroke-white stroke-black'}
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        transition={{ duration: 0.3 }}
                    />
                    <motion.path
                        d="M3 12H21"
                        className={'dark:stroke-white stroke-black'}
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.svg>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-0 left-0 w-full h-screen dark:bg-[#0f151f] bg-white dark:text-white text-black z-40 flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-6">
                            {links.map((link) => (
                                <Link key={link.name} href={link.href}>
                                    <span className="dark:text-white text-black text-2xl">{link.name}</span>
                                </Link>
                            ))}
                            <Button size="small" className="mt-4">
                                Get in Touch
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default MobileNav;