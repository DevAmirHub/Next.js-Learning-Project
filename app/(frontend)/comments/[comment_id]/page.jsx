import Link from "next/link";
import { getComment } from "../../../lib/api/cumments";

export default async function CommentPage({ params }) {
    const { comment_id } = await params;
    const comment = await getComment(comment_id);
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Comment {comment_id}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">Name:</span> 
                <br />
                {comment.name} 
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">Email:</span>
                <br />
                {comment.email}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">Body:</span>
                <br />
                {comment.body}
            </p>
            <Link href="/comments" className="text-blue-500 mt-4 hover:underline inline-block">
                ← Back to Comments
            </Link>
        </div>
    );
}