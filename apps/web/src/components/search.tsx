'use client';

import { Dropdown } from 'flowbite-react';
import Wrapper from './wrapper';

export default function SearchBar() {
  return (
    <Wrapper>
      <div className="w-[1200px] h-[144px] rounded-[20px] py-[37px] px-[70px] bg-primary">
        <div className="grid grid-cols-4">
          <div>
            <div className="mb-[6px] text-white">Looking for</div>
            <Dropdown
              className="border flex rounded-md"
              label="Dropdown button"
              dismissOnClick={false}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <div className="mb-[6px] text-white">Location</div>
            <Dropdown
              className="border flex rounded-md"
              label="Dropdown button"
              dismissOnClick={false}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div>
            <div className="mb-[6px] text-white">When</div>
            <Dropdown
              className="border flex rounded-md"
              label="Dropdown button"
              dismissOnClick={false}
            >
              <Dropdown.Item>Dashboard</Dropdown.Item>
              <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
          </div>
          <div className="w-[70px] h-[70px] bg-secondary flex items-center justify-center rounded-md">
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
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
