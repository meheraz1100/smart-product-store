import React from "react";
import { Truck, RefreshCcw, Headphones } from "lucide-react";

const features = [
  {
    title: "Free Delivery",
    desc: "Fast and free delivery service with no minimum order requirement.",
    icon: <Truck className="w-8 h-8" />,
  },
  {
    title: "Return Policy",
    desc: "Easy and hassle-free return facility within the specified time period.",
    icon: <RefreshCcw className="w-8 h-8" />,
  },
  {
    title: "24/7 Support",
    desc: "Our support team is always here for you, anytime you need help.",
    icon: <Headphones className="w-8 h-8" />,
  },
];

export default function ServiceHighlights() {
  return (
    <section className="w-full bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Our Services & Benefits
        </h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          We provide you with a smart, fast, and reliable shopping experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 hover:bg-gray-700 transition rounded-2xl p-6 text-center shadow-lg"
          >
            <div className="flex justify-center mb-4 text-blue-400">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}