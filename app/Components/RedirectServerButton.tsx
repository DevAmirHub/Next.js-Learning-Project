import { redirect } from "next/navigation";

export default async function RedirectServerButton({ href }: { href: string }) {
    redirect(href);
}