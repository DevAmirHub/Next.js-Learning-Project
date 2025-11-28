import Link from "next/link";

export default function Category() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
        Blog Categories
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        Choose a category to explore.
      </p>
      <div className="flex flex-col gap-4 mt-4 text-base font-medium sm:flex-row">
        <Link 
          href="/blog/category/education" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Education
        </Link>
        <Link 
          href="/blog/category/sports" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          Sports
        </Link>
      </div>
      <Link 
        href="/blog" 
        className="text-blue-500 mt-8 hover:underline inline-block"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}

