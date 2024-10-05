import React from 'react';

export default function ProductCard({ image, title, price, brand, rating, discount }) {
  const formattedPrice = parseFloat(price).toFixed(2);  // Ensure price is formatted
  const discountedPrice = discount ? (price - (price * discount / 100)).toFixed(2) : null;  // Calculate discount

  return (
    <div className="group relative block overflow-hidden bg-white rounded-lg shadow-lg transition hover:shadow-2xl">
      {/* Wishlist Button */}
      <button
        aria-label="Add to Wishlist"
        className="absolute right-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
          />
        </svg>
      </button>

      {/* Product Image */}
      <img
        src={image || '/fallback-image-url.jpg'}  // Add fallback image
        alt={title}
        className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
      />

      {/* Product Info */}
      <div className="relative border border-gray-100 p-6 rounded-b-lg">
        {brand && (
          <span className="inline-block mb-2 bg-yellow-400 px-3 py-1.5 text-xs font-medium uppercase tracking-wider rounded">
            {brand}
          </span>
        )}

        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-yellow-500 transition duration-300">
          {title}
        </h3>

        {typeof rating === 'number' && rating >= 0 && rating <= 5 && (
          <div className="flex items-center mt-2">
            <span className="text-yellow-400 text-sm">{'★'.repeat(Math.floor(rating))}</span>
            <span className="ml-2 text-gray-600 text-sm">({rating} Reviews)</span>
          </div>
        )}

        <div className="mt-2">
          {discount ? (
            <p className="text-lg text-gray-900 font-bold">
              ${discountedPrice}{' '}
              <span className="text-sm text-gray-500 line-through">${formattedPrice}</span>
            </p>
          ) : (
            <p className="text-lg font-bold text-gray-900">${formattedPrice}</p>
          )}
        </div>

        <form className="mt-4">
          <button
            type="button"
            className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105 hover:bg-yellow-500"
          >
            Add to Cart
          </button>
        </form>
      </div>
    </div>
  );
}
