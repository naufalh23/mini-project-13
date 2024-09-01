'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AvatarComp() {
  return (
    <div>
      <div className="flex gap-4">
        <Link
          href={'/register'}
          className="text-white font-bold hover:underline"
        >
          Register
        </Link>
        <Link href={'/login'} className="text-white font-bold hover:underline">
          Login
        </Link>
      </div>
    </div>
  );
}
