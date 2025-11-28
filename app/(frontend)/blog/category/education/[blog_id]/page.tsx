import Link from "next/link";

import Link from "next/link";

export default async function EducationBlog({params}: { params: Promise<{ blog_id: string | number }>;}) {
  const { blog_id } = await params

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
        Education Blog {blog_id}
      </h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the education blog post {blog_id}.
      </p>
      <Link 
        href="/blog/category/education" 
        className="text-blue-500 mt-4 hover:underline inline-block"
      >
        ← Back to Education
      </Link>
    </div>
  );
}
