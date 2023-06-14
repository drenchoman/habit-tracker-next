'use client';
import { useState, useEffect } from 'react';
import Firebase from '../firebase/config';
import Link from 'next/link';

export default function useFirbaseAuth() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Hello world</h1>
        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/names"
        >
          Names
        </Link>

        <Link
          className="bg-blue-400 hover:bg-blue-700 text-white py-2 px-4 rounded my-2 mx-2"
          href="/"
        >
          Back
        </Link>
      </div>
    </main>
  );
}
