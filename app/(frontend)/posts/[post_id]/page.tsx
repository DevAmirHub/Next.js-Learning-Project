import Link from "next/link";
import { getPost } from "../../../lib/api/posts";

export default async function PostPage({ params }: { params: Promise<{ post_id: string }> }) {
    const { post_id } = await params;
    const post = await getPost(post_id);
    
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
                {post.title}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                {post.body}
            </p>
            <Link 
                href="/posts" 
                className="text-blue-500 mt-4 hover:underline inline-block"
            >
                ← Back to Posts
            </Link>
        </div>
    );
}