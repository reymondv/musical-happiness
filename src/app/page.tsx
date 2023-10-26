'use client';

import { useState, useEffect } from 'react';
import * as Constants from './_lib/constants/spotify';
import { getAccessToken } from './_lib/api/fetch';
import { useSearchParams } from 'next/navigation';

type SearchParamsType = {
  searchParams: {
    code: string;
    state: string;
  };
};

function Home({ searchParams: { code, state } }: SearchParamsType) {
  // const searchParams = useSearchParams();
  const [accessToken, setAccessToken] = useState<string>('');
  useEffect(() => {
    console.log(code, state);
    if (code && state) {
      getAccessToken(code, state)
        .then(({ data }) => {
          if (data.access_token) {
            setAccessToken(data.access_token);
          }
        })
        .catch((error) => error);
    }
  });

  return (
    <main className='flex min-h-screen flex-row items-end justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-end font-mono text-sm lg:flex text-center'>
        <a
          href={Constants.AUTH_ENDOPOINT}
          target='_blank'
          className='bg-green-500 p-4 rounded-xl font-bold text-black text-lg mt-0'
        >
          Login to Spotify
        </a>
      </div>
    </main>
  );
}

export default Home;
