'use client';

import { verifyUser } from '@/lib/author';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function VerifyPage() {
  const params = useParams<{ token: string }>();
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(null);

  const onVerify = async () => {
    try {
      const { result, ok } = await verifyUser(params.token);
      if (!ok) throw result.msg;
      setVerified(true);
      toast.success(result.msg);
    } catch (err: any) {
      setError(err.message ?? err);
      toast.error(err.message ?? err);
    }
  };

  useEffect(() => {
    onVerify();
  }, []);

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      {!verified && !error && (
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12H4zm2 5.291A7.962 7.962 0 014 19.708a7.962 7.962 0 0114.625 0c1.737-3.573 3.294-6.543 4.625-9.708z"
            />
          </svg>
          <p className="text-lg text-gray-600">Verifying your account...</p>
        </div>
      )}
      {error && (
        <div className="text-center">
          <svg
            className="h-10 w-10 text-red-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2Zm0 18C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            />
          </svg>
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      )}
      {verified && (
        <div className="text-center">
          <svg
            className="h-10 w-10 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 2C6.47 2 2 6.47 2 12C2 17.53 6.47 22 12 22C17.53 22 22 17.53 22 12C22 6.47 17.53 2 12 2Zm0 18C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
            />
          </svg>
          <p className="text-lg text-green-600">
            Your account has been verified!
          </p>
        </div>
      )}
    </div>
  );
}
