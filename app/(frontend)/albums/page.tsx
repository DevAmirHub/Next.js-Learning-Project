import { getAlbums } from "../../lib/api/albums";
import Link from "next/link";

export default async function Albums() {
    const albums = await getAlbums();
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Albums</h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                This is the albums page. Browse our albums below.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {albums.map((album) => (
                    <div key={album.id} className="p-4 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:shadow-lg transition-shadow">
                        <h2 className="text-lg font-bold text-black dark:text-zinc-50 mb-2">
                            {album.title}
                        </h2>
                        <Link href={`/albums/${album.id}`} className="text-blue-500 mt-4 hover:underline inline-block">
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