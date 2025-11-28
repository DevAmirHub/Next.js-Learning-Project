import Link from "next/link";
import { getComments } from "../../lib/api/cumments";

export default async function Comments() {
    const comments = await getComments();
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Comments</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                This is the comments page. Browse our comments below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-lg transition-shadow">
                        <h2 className="text-lg font-bold text-black dark:text-zinc-50 mb-2">
                            {comment.name}
                        </h2>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4">
                            {comment.body}
                        </p>
                        <Link href={`/comments/${comment.id}`} className="text-blue-500 mt-4 hover:underline inline-block">
                            Read More →
                        </Link>
                    </div>
                    ))}
            </div>
            <Link href="/" className="text-blue-500 mt-4 hover:underline inline-block">
                ← Back to Home
            </Link>
        </div>
    );
}