import Image from "next/image";

const brands = [
  { id: 1, name: "Brand 1", logo: "/brands/brand1.jpg" },
  { id: 2, name: "Brand 2", logo: "/brands/brand2.jpg" },
  { id: 3, name: "Brand 3", logo: "/brands/brand3.png" },
  { id: 4, name: "Brand 4", logo: "/brands/brand4.jpg" },
  { id: 5, name: "Brand 5", logo: "/brands/brand5.jpg" },
];

export default function TrustedBrands() {
  return (
    <section className="w-full bg-white dark:bg-gray-900 py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Trusted by Leading Brands
        </h2>

        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm md:text-base">
          We proudly collaborate with global partners to ensure quality and trust.
        </p>

        {/* Logos Grid */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:scale-105 transition-transform duration-300"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={120}
                height={60}
                className="object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}