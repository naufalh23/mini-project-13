'use client';

import { Dropdown } from 'flowbite-react';
import Wrapper from './wrapper';
import Link from 'next/link';

export default function SearchBar() {
  return (
    <Wrapper>
      <div className="flex items-center justify-center w-full h-[144px] rounded-[20px] py-auto px-4 bg-primary">
        <div className="flex flex-warp justify-around w-full">
          <div>
            <div className="mb-[6px] text-white">Looking for</div>
            <input
                type="search"
                placeholder="Search events"
                className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md text-text_pri"
              />
          </div>
          <div>
            <div className="mb-[6px] text-white">Event Category</div>
            <input
                type="search"
                placeholder="Search category"
                className="border p-2 border-gray-500 h-10 w-full max-w-[400px] rounded-md text-text_pri"
              />
          </div>
          
          <Link href={"/search"} className="w-[70px] h-[70px] btn btn-active btn-primary bg-secondary flex items-center justify-center rounded-md">
            <svg
              className="w-6 h-6 text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="2"
                d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
