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

  // 🔍 Filtering logic
  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name.toLowerCase().includes(search);
    const matchPrice =
      product.price >= minPrice && product.price <= maxPrice;

    return matchSearch && matchPrice;
  });

  return (
    <div className="my-10 px-4">
      <h2 className="text-center text-2xl font-bold">All Products</h2>

      {/* 🔎 Search + Filter Bar */}
      <form className="flex flex-col md:flex-row gap-3 mt-6 justify-center">
        <input
          type="text"
          name="search"
          placeholder="Search products..."
          className="border p-2 rounded w-full md:w-1/3"
        />

        <input
          type="number"
          name="minPrice"
          placeholder="Min Price"
          className="border p-2 rounded w-full md:w-1/4"
        />

        <input
          type="number"
          name="maxPrice"
          placeholder="Max Price"
          className="border p-2 rounded w-full md:w-1/4"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded"
        >
          Filter
        </button>

        {/* 🔄 Reset Button */}
        <a
          href="/products"
          className="bg-gray-200 text-black px-4 py-2 rounded text-center"
        >
          Reset
        </a>
      </form>

      {/* Products */}
      {filteredProducts.length === 0 ? (
        <p className="text-center mt-10">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;