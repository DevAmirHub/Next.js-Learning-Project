"use client";

import { useRouter } from "next/navigation";

export default function RedirectButton({ href, children }: { href: string; children: React.ReactNode }) {
    const router = useRouter();
    return (
        <button onClick={() => router.push(href)} className="text-blue-500 mt-4">
            {children}
        </button>
    )
}