import Link from "next/link";
import React from "react";


export default function Products() {
  const products = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Products</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the products page. Browse our products below.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {products.map((productId) => (
          <Link
            key={productId}
            href={`/shop/products/${productId}`}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
          >
            Product {productId}
          </Link>
        ))}
      </div>
      <Link 
        href="/shop" 
        className="text-blue-500 mt-8 hover:underline inline-block"
      >
        ← Back to Shop
      </Link>
    </div>
  );
}