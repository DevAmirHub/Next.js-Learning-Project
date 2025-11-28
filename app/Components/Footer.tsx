import Link from "next/link";
import React from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear( );

  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/posts" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Posts
                </Link>
              </li>
              <li>
                <Link href="/course" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Course
                </Link>
              </li>
              <li>
                <Link href="/comments" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Comments
                </Link>
              </li>
              <li>
                <Link href="/albums" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Albums
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-4">
              Categories
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/category" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/blog/category/education" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/blog/category/sports" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50">
                  Sports
                </Link>
              </li>
              
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-zinc-50 mb-4">
              About
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm">
              This is a Next.js project with a clean and modern layout structure.
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-200 dark:border-zinc-800 text-center">
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">
            © {currentYear} My App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

