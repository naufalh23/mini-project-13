'use client';

import Link from 'next/link';
import Wrapper from './wrapper';
import AvatarComp from './avatar';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="sticky top-0 h-[80px] z-[9999] "
    >
      <nav className={`transition ease-in-out duration-150 border-gray-200 dark:bg-gray-900 ${isSticky ? "shadow-md bg-white" : "bg-white"}`}>
        <Wrapper>
          <div className="flex justify-between w-full items-center">
            <Link
              href={'/'}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src={'/assets/logo.png'}
                alt="..."
                width={150}
                height={10}
              />
            </Link>
            <AvatarComp />
          </div>
        </Wrapper>
      </nav>
    </div>
  );
};
