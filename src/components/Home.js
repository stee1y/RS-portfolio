import React from "react";

export default function Home() {
  return (
    <main className="w-full h-full mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          Hello, I'm Ivan Eremeev
        </h1>
        <p className="border-l-8 border-r-8 border-gray-800 inline-block bg-gray-800 mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          and this is my portfolio site.
        </p>
      </div>
    </main>
  )
}
