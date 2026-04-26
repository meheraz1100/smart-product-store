import FeaturedProducts from "@/components/FeaturedProducts";
import FlashSaleSection from "@/components/FlashSale";
import Hero from "@/components/Hero";
import ServiceHighlights from "@/components/Service";
import TrustedBrands from "@/components/TrustedBrands";
import Link from "next/link";

export default function Home() {
  return (
    <div className="my-10 px-4">
      <Hero />
      <FeaturedProducts />
      <FlashSaleSection />
      <TrustedBrands />
      <ServiceHighlights />
    </div>
  );
}