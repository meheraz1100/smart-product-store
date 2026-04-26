// app/products/[id]/loading.jsx
"use client";
export default function Loading() {
    return (
        <div className="max-w-screen-xl mx-auto min-h-screen p-6">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

    {Array.from({ length: 6 }).map((_, i) => (
      <div
        key={i}
        className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.8s_infinite] bg-gradient-to-r from-transparent via-white/30 dark:via-gray-700/30 to-transparent" />

        {/* Image skeleton */}
        <div className="h-56 w-full bg-gray-200 dark:bg-gray-700" />

        {/* Content */}
        <div className="p-5 space-y-4">
          {/* Title */}
          <div className="h-5 w-3/4 rounded-md bg-gray-200 dark:bg-gray-700" />

          {/* Subtitle */}
          <div className="h-4 w-1/2 rounded-md bg-gray-200 dark:bg-gray-700" />

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-2">
            <div className="h-6 w-20 rounded-md bg-gray-200 dark:bg-gray-700" />
            <div className="h-9 w-24 rounded-lg bg-gray-200 dark:bg-gray-700" />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* shimmer animation style */}
  <style jsx>{`
    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  `}</style>
</div>
    );
}