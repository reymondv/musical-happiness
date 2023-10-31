'use client';

import { useState, useEffect } from 'react';
import supabase from '../../supabase';

const featchData = async () => {
  const { data, error } = await supabase.from('test').select();
};

function Login() {
  const insertData = async (data: string) => {
    await supabase.from('tasks').insert([{ description: data }]);
  };

  const signInWithSpotify = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'spotify',
    });
    console.log(data);
  };

  const signOutWithSpotify = async () => {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  };

  const getUserData = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (user) {
        console.log(user);
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const getUserSessions = async () => {
    const { data, error } = await supabase.auth.getSession();
    console.log(data, error);
  };

  useEffect(() => {
    // getUserData();
    getUserSessions();
  });

  return (
    <main className='flex min-h-screen flex-row items-end justify-between p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-end text-sm lg:flex text-center'>
        <button
          onClick={signInWithSpotify}
          className='bg-green-500 p-4 rounded-xl font-medium text-black text-lg mt-0'
        >
          Login to Spotify
        </button>

        <button
          onClick={signOutWithSpotify}
          className='bg-green-500 p-4 rounded-xl font-medium text-black text-lg mt-0'
        >
          Sign out
        </button>
      </div>
      <button onClick={() => insertData('msg')}>test button</button>
    </main>
  );
}

export default Login;
