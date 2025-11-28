import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Home</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 text-center max-w-2xl">
        This is the home page. Welcome to our application!
      </p>
      <div className="flex flex-col gap-4 mt-4 text-base font-medium sm:flex-row">
        <Link 
          href="/shop" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Shop
        </Link>
        <Link 
          href="/blog" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Blog
        </Link>
        <Link 
          href="/course" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Course
        </Link>
        <Link 
          href="/posts" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Posts
        </Link>
        <Link 
          href="/comments" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Comments
        </Link>
        <Link 
          href="/albums" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Albums
        </Link>
      </div>
    </div>
  );
}

