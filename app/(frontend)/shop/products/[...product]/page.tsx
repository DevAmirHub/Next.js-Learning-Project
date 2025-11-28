import Link from "next/link";
import React from "react";

export default async function Product( { params }: { params: Promise<{ product: string }> } ) {
    const { product } = await params;
    const productArray = Array.isArray(product) ? product : [product];
    const productPath = productArray.join(" / ");

    return (
        <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">
                Product {productPath}
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
                This is the product page for {productPath}.
            </p>
            <Link 
                href="/shop/products" 
                className="text-blue-500 mt-4 hover:underline inline-block"
            >
                ← Back to Products
            </Link>
        </div>
    );
}