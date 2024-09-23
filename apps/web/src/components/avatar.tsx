'use client';

import { deleteToken, getToken } from '@/lib/server';
import { useAppSelector } from '@/redux/hooks';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function AvatarComp() {
  const [token, setToken] = useState('');
  const getData = async () => {
    const res = await getToken();
    setToken(res || '');
  };
  const user = useAppSelector((state) => state.user);
  const onLogout = async () => {
    await deleteToken();
    setToken('');
    toast.success('You have been logged out successfully!');
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <nav className="flex justify-between items-center ">
      {token ? (
        <div className="flex items-center gap-4 py-2 px-3 bg-white shadow-md rounded-md">
          <div className="avatar w-12 h-12 rounded-full overflow-hidden">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col border-r-2 border-gray-500 pr-3">
            <span className="text-lg text-black font-bold">{user.name}</span>
          </div>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onLogout}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Link
            href={'/login'}
            className="text-black hover:text-gray-800 transition duration-300"
          >
            Login
          </Link>
          <Link
            href={'/signup'}
            className="bg-secondary hover:bg-secondary-dark text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
