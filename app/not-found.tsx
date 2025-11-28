import Link from "next/link";
import React from "react";

export default function NotFound(): React.ReactNode {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black sm:items-start">
                <h1 className="text-3xl font-bold text-red-500 dark:text-red-500">
                    Not Found :)
                </h1>
                <p className="text-lg text-zinc-600 dark:text-zinc-400">
                    The page you are looking for does not exist.
                </p>
                <Link href="/" className="text-blue-500 mt-4" passHref>Go to Home</Link>
            </main>
        </div>
    );
}