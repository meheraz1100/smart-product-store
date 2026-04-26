import ProductCard from '@/components/ProductCard';
import React from 'react';

async function getProducts() {
  try {
    const res = await fetch("https://next-store-server-alpha.vercel.app/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

const AllProducts = async ({ searchParams }) => {
  const products = await getProducts();

  const search = searchParams?.search?.toLowerCase() || "";
  const minPrice = Number(searchParams?.minPrice || 0);
  const maxPrice = Number(searchParams?.maxPrice || Infinity);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search);
    const matchPrice =
      product.price >= minPrice && product.price <= maxPrice;

    return matchSearch && matchPrice;
  });

  return (
    <div className="min-h-screen my-10 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500">

      {/* Heading */}
      <h2 className="text-center font-extrabold text-2xl sm:text-3xl md:text-4xl tracking-tight 
      text-gray-900 dark:text-white">
        All Products
      </h2>

      {/* Search + Filter */}
      <form className="mt-8 flex flex-col md:flex-row gap-3 justify-center items-stretch">

        <input
          type="text"
          name="search"
          placeholder="Search products..."
          className="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 
          bg-white/80 backdrop-blur-md text-gray-900
          dark:bg-gray-800 dark:border-gray-700 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 
          bg-white/80 backdrop-blur-md text-gray-900
          dark:bg-gray-800 dark:border-gray-700 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="w-full md:w-1/4 px-4 py-2 rounded-lg border border-gray-300 
          bg-white/80 backdrop-blur-md text-gray-900
          dark:bg-gray-800 dark:border-gray-700 dark:text-white
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button
          type="submit"
          className="px-5 py-2 rounded-lg font-semibold
          bg-gradient-to-r from-indigo-500 to-purple-600 text-white
          hover:opacity-90 transition"
        >
          Filter
        </button>

        <a
          href="/products"
          className="px-5 py-2 rounded-lg text-center font-semibold
          bg-gray-200 text-gray-900 hover:bg-gray-300
          dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700
          transition"
        >
          Reset
        </a>
      </form>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-12 text-gray-600 dark:text-gray-300">
          No products found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;