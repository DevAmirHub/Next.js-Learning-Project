import Link from "next/link";
import { getPosts } from "../../lib/api/posts";

export default async function Posts() {
  const posts = await getPosts();
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Posts</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the posts page. Browse our posts below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div 
            key={post.id} 
            className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-lg transition-shadow"
          >
            <h2 className="text-lg font-bold text-black dark:text-zinc-50 mb-2">
              {post.title}
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
              {post.body}
            </p>
            <Link 
              href={`/posts/${post.id}`} 
              className="text-blue-500 hover:underline inline-block"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}