import Link from "next/link";

export default function Shop() {
  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-black dark:text-zinc-50 mb-4">Shop</h1>
      <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
        This is the shop page. Browse our products below.
      </p>
      <div className="flex flex-col gap-4 mt-4 text-base font-medium sm:flex-row">
        <Link 
          href="/shop/products" 
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-center"
        >
          All Products
        </Link>
      </div>
    </div>
  );
}