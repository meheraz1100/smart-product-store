import Link from 'next/link';
import React from 'react';

const ProductCard = ({ product }) => {
  const { image, price, name } = product;

  return (
    <div className="group relative w-full rounded-2xl overflow-hidden 
    bg-white dark:bg-gray-900 
    border border-gray-200 dark:border-gray-800
    shadow-sm hover:shadow-2xl
    transition-all duration-300 hover:-translate-y-2">

      {/* Image Section */}
      <div className="relative h-80 w-full overflow-hidden">

        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover 
          transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay for premium feel */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">

        {/* Title */}
        <h5 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2">
          {name}
        </h5>

        {/* Bottom Section */}
        <div className="flex items-center justify-between">

          {/* Price Badge */}
          <span className="px-3 py-1 rounded-full text-sm font-bold 
          bg-gray-100 text-gray-900 
          dark:bg-gray-800 dark:text-white
          border border-gray-200 dark:border-gray-700">
            ${price}
          </span>

          {/* Button */}
          <Link
            href={`/products/${product._id}`}
            className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white
            bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
            rounded-xl shadow-md
            transition-all duration-300
            hover:shadow-purple-500/30 hover:scale-105
            active:scale-95"
          >
            View Details
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ProductCard;