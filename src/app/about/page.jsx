import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 px-4 py-12 flex items-center justify-center">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-10 space-y-8">

        {/* Logo Section */}
        <div className="flex justify-center">
          <Image
            src="/loogo/sps_logo.png" // Replace with your logo
            alt="Brand Logo"
            width={120}
            height={120}
            className="rounded-xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white">
          About Our E-Commerce Platform
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
          We are a modern e-commerce platform built to deliver a seamless and
          enjoyable shopping experience. Our mission is to make online shopping
          faster, safer, and more convenient for everyone. We focus on providing
          high-quality products, reliable service, and a smooth user experience
          from browsing to delivery.
        </p>

        {/* Feature Section */}
        <div className="grid md:grid-cols-3 gap-6 pt-6">

          <div className="p-5 bg-gray-100 dark:bg-gray-700 rounded-xl text-center">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Fast Delivery
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Quick and reliable delivery across all regions.
            </p>
          </div>

          <div className="p-5 bg-gray-100 dark:bg-gray-700 rounded-xl text-center">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              Quality Products
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Carefully selected products ensuring the best quality.
            </p>
          </div>

          <div className="p-5 bg-gray-100 dark:bg-gray-700 rounded-xl text-center">
            <h3 className="font-semibold text-lg text-gray-800 dark:text-white">
              24/7 Support
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              Our support team is always ready to help you anytime.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}