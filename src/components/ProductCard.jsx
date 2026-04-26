import Link from 'next/link';
import React from 'react'

const ProductCard = ({ product }) => {
    const { image, price, name, description } = product;
    return (
        <div className="group w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700">

  {/* Image Section */}
  <div className="h-80 w-full overflow-hidden">
    <img
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      src={image}
      alt="product image"
    />
  </div>

  {/* Content */}
  <div className="px-5 pb-5 mt-4 space-y-4">

    {/* Title */}
    <h5 className="text-lg md:text-xl font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
      {name}
    </h5>

    {/* Bottom Section */}
    <div className="flex items-center justify-between">

      {/* Price */}
      <span className="text-2xl font-bold text-gray-900 dark:text-white">
        ${price}
      </span>

      {/* Button */}
      <Link
        href={`/products/${product._id}`}
        className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-500 rounded-xl shadow-md transition-all duration-300 overflow-hidden
        hover:from-blue-700 hover:to-blue-600 hover:shadow-lg active:scale-95"
      >
        View Details
      </Link>

    </div>
  </div>
</div>

    )
}

export default ProductCard
