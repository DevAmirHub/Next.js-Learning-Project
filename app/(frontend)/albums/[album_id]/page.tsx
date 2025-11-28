import { getAlbum } from "../../../lib/api/albums";
import Link from "next/link";

export default async function AlbumPage({ params }: { params: Promise<{ album_id: string }> }) {
    const { album_id } = await params;
    const album = await getAlbum(album_id);
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Album {album_id}</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">Title:</span>
                <br />
                {album.title}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">User ID:</span>
                <br />
                {album.userId}
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                <span className="font-bold">ID:</span>
                <br />
                {album.id}
            </p>
            <Link href="/albums" className="text-blue-500 mt-4 hover:underline inline-block">
                ← Back to Albums
            </Link>
        </div>
    );
}   