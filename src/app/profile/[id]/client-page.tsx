"use client";

import Image from "next/image";
import { Icon } from "@iconify/react";
import SearchBar from '../../../components/SearchBar'
import { DirectionAwareHover } from '../../../components/direction-aware-hover'
import { useState, useRef, forwardRef } from 'react';
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "../../../components/animatedBeam";

interface Product {
  imageUrl: string;
  title: string;
  price: string;
}

interface Company {
  imageURL: string;
  name: string;
}

interface ClientPageProps {
  company: Company;
}

const VerificationNode = forwardRef<HTMLDivElement, {
  className?: string;
  children?: React.ReactNode;
}>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-8 items-center justify-center rounded-full bg-white shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
VerificationNode.displayName = "VerificationNode";

export default function ClientPage({ company }: ClientPageProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Add refs for animated beam nodes
  const containerRef = useRef<HTMLDivElement>(null);
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const products = [
    {
      imageUrl: "/f3d5c85fa0426f90f400358a38d438ae 1.png",
      title: "Organic Apples",
      price: "$2.99 / lb"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Fresh Tomatoes",
      price: "$3.49 / lb"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Green Lettuce",
      price: "$1.99 / head"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Sweet Carrots",
      price: "$2.49 / lb"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Red Peppers",
      price: "$4.99 / lb"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Fresh Cucumbers",
      price: "$1.79 / each"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Organic Potatoes",
      price: "$5.99 / bag"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Fresh Spinach",
      price: "$3.99 / bunch"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Sweet Corn",
      price: "$0.99 / ear"
    },
    {
      imageUrl: "/api/placeholder/800/600",
      title: "Fresh Broccoli",
      price: "$2.99 / head"
    }
  ];

  return (
    <>
      <div className="flex flex-col items-center text-black">
        <Image src={company.imageURL} alt={`${company.name} logo`} height={50} width={50} className="h-24 w-auto" />
        <h1 className="text-black font-bold text-4xl pb-4">{company.name}</h1>

        <div className="flex space-x-4">
          <div className="flex flex-row items-center justify-center bg-[#2544AA]/50 rounded-lg px-2 py-1 gap-1 text-sm">
            <Icon icon="carbon:checkmark-filled" color="#2544AA" />
            <span className="text-[#2544AA]">HACCP Verified</span>
          </div>
          <div className="flex flex-row items-center justify-center bg-[#CCC612]/50 rounded-lg px-2 py-1 gap-1 text-sm">
            <Icon icon="carbon:checkmark-filled" color="#CCC612" />
            <span className="text-[#9F9B1B]">FDA Verified</span>
          </div>
          <div className="flex flex-row items-center justify-center bg-[#78D025]/50 rounded-lg px-2 py-1 gap-1 text-sm">
            <Icon icon="carbon:checkmark-filled" color="#78D025" />
            <span className="text-[#78D025]">USDA certified</span>
          </div>
        </div>

        <header className="flex w-3/4 space-x-32 mt-24">
          <h1 className="text-2xl text-black font-bold">Search for Verified Ethical Produce</h1>
          <SearchBar />
        </header>

        <div className="w-full mt-8 px-8">
          <div className="grid grid-cols-5 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex justify-center"
                onClick={() => handleProductClick(product)}
              >
                <DirectionAwareHover
                  imageUrl={product.imageUrl}
                  className="h-48 w-48 md:h-48 md:w-48 cursor-pointer"
                >
                  <p className="font-bold text-lg">{product.title}</p>
                  <p className="font-normal text-xs">{product.price}</p>
                </DirectionAwareHover>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[500px] relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <Icon icon="carbon:close" className="w-5 h-5" />
            </button>

            {selectedProduct && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full h-[300px]">
                  <Image
                    src={selectedProduct.imageUrl}
                    alt={selectedProduct.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold mb-1 text-black">{selectedProduct.title}</h2>
                  <p className="text-lg text-gray-700">{selectedProduct.price}</p>
                </div>

                {/* Verification Flow with Animated Beams */}
                <div className="relative flex w-full items-center justify-between" ref={containerRef}>
                  <VerificationNode ref={node1Ref} className="bg-[#2544AA]/50">
                    <Icon icon="mdi:tractor" color="#2544AA" className="w-4 h-4" />
                  </VerificationNode>
                  <VerificationNode ref={node2Ref} className="bg-[#CCC612]/50">
                    <Icon icon="mdi:truck" color="#CCC612" className="w-4 h-4" />
                  </VerificationNode>
                  <VerificationNode ref={node3Ref} className="bg-[#78D025]/50">
                    <Icon icon="mdi:warehouse" color="#78D025" className="w-4 h-4" />
                  </VerificationNode>
                  <VerificationNode ref={node4Ref} className="bg-[#4A90E2]/50">
                    <Icon icon="mdi:store" color="#4A90E2" className="w-4 h-4" />
                  </VerificationNode>

                  <AnimatedBeam
                    duration={2}
                    containerRef={containerRef}
                    fromRef={node1Ref}
                    toRef={node2Ref}
                  />
                  <AnimatedBeam
                    duration={2}
                    containerRef={containerRef}
                    fromRef={node2Ref}
                    toRef={node3Ref}
                  />
                  <AnimatedBeam
                    duration={2}
                    containerRef={containerRef}
                    fromRef={node3Ref}
                    toRef={node4Ref}
                  />
                </div>

                {/* Optional: Add labels below */}
                <div className="flex w-full justify-between px-2 text-xs text-gray-600">
                  <span className="font-bold">Farm</span>
                  <span className="font-bold">Transport</span>
                  <span className="font-bold">Warehouse</span>
                  <span className="font-bold">Store</span>
                </div>
                
                <div className="flex gap-2 mt-2">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Icon icon="carbon:checkmark-filled" color="#2544AA" className="w-4 h-4" />
                    <span>HACCP Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Icon icon="carbon:checkmark-filled" color="#CCC612" className="w-4 h-4" />
                    <span>FDA Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Icon icon="carbon:checkmark-filled" color="#78D025" className="w-4 h-4" />
                    <span>USDA Certified</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}