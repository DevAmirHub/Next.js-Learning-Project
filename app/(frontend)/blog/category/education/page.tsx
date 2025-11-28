import Link from "next/link";


export default function Education() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
        Education
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the education page.
      </p>
      <Link 
        href="/blog" 
        className="text-blue-500 mt-4 hover:underline inline-block"
      >
        ← Back to Blog
      </Link>
    </div>
  );
}