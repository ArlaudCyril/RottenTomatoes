import React from 'react';
import Link from "next/link";

const divider = () => {
  return (
    <div className="bg-gray-700">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-3xl font-semibold text-white capitalize lg:text-4xl">choose the <span className="text-red-700">subscription</span> that right for you</h1>

        <p className="mt-4 xl:mt-6 text-white">
          Change or cancel anytime
        </p>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
          <div className="p-8 space-y-3 border-2 border-primary-800 rounded-xl bg-primary-800 hover:bg-primary-600 text-white font-semibold">
            <span className="inline-block text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-black capitalize font-neue">9.99€/month</h1>
            <p>Comment: Acces</p>
            <p>Rate a movie: Denied</p>
            <p>Add a movie: Denied</p>

            <Link href="/login">
              <a className="inline-flex p-2 text-white capitalize transition-colors duration-300 transform bg-black rounded-full rtl:-scale-x-100 hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </Link>
          </div>

          <div className="p-8 space-y-3 border-2 border-primary-800 rounded-xl bg-primary-800 hover:bg-primary-600 text-white font-semibold">
            <span className="inline-block text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-black capitalize font-neue">24.99€/month</h1>
            <p>Comment: Acces</p>
            <p>Rate a movie: Acces</p>
            <p>Add a movie: Denied</p>

            <Link href="/login">
              <a className="inline-flex p-2 text-white capitalize transition-colors duration-300 transform bg-black rounded-full rtl:-scale-x-100 hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </Link>
          </div>

          <div className="p-8 space-y-3 border-2 border-primary-800 rounded-xl bg-primary-800 hover:bg-primary-600 text-white hover:text-black font-bold">
            <span className="inline-block text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-credit-card" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z" />
                <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
              </svg>
            </span>
            <h1 className="text-2xl font-semibold text-black capitalize font-neue">49.99€/month</h1>
            <p>Comment: Acces</p>
            <p>Rate a movie: Acces</p>
            <p>Add a movie: Acces</p>
            <Link href="/login">
              <a className="inline-flex p-2 text-white capitalize transition-colors duration-300 transform bg-black rounded-full rtl:-scale-x-100 hover:underline hover:text-primary-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default divider