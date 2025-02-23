"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

// Custom Input Component
const Input = ({ 
  className, 
  placeholder,
  ...props 
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className={cn(
        "w-full px-4 py-2 rounded-lg border border-[#78D025] bg-white/80",
        "placeholder:text-[#78D025]/60 text-[#78D025]",
        "focus:outline-none focus:ring-2 focus:ring-[#78D025]/20",
        className
      )}
      placeholder={placeholder}
      {...props}
    />
  );
};

// Custom Button Component
const Button = ({
  className,
  children,
  variant = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline"
}) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded-lg transition-colors",
        variant === "default" && "bg-[#78D025] text-white hover:bg-[#78D025]/90",
        variant === "outline" && "border border-[#78D025] text-[#78D025] hover:bg-[#78D025]/10",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default function Page() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: "url('/DashBG.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(0.9)',
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-2xl font-bold text-black mb-4 text-start ">
            Add Your Store to Our Database
          </h1>
          <p className="text-lg text-gray-700 mx-auto text-start ">
            We believe in shaping a transparent future for agriculture for everybody.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="flex gap-6">
          {/* Left Section - 1/3 width */}
          <div className="w-1/3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#78D025] mb-1">Name</label>
                <Input placeholder="Enter name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#78D025] mb-1">Certifications</label>
                <Input placeholder="Enter certifications" />
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px bg-[#78D025]/30" />

          {/* Right Section - 2/3 width */}
          <div className="flex-grow bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            {/* Produce Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#78D025] mb-1">Produce</label>
              <Input placeholder="Enter produce details" className="w-full" />
            </div>

            {/* 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              {/* Farm Box */}
              <div className="border border-[#78D025]/30 rounded-lg p-4 bg-white/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#78D025]">
                  <Icon icon="mdi:tractor" className="w-5 h-5" />
                  Farm
                </h3>
                <div className="space-y-2">
                  <Input placeholder="Farm name" className="text-sm" />
                </div>
              </div>

              {/* Store Box */}
              <div className="border border-[#78D025]/30 rounded-lg p-4 bg-white/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#78D025]">
                  <Icon icon="mdi:store" className="w-5 h-5" />
                  Store
                </h3>
                <div className="space-y-2">
                  <Input placeholder="Store name" className="text-sm" />
                </div>
              </div>

              {/* Distribution Box */}
              <div className="border border-[#78D025]/30 rounded-lg p-4 bg-white/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#78D025]">
                  <Icon icon="mdi:truck-delivery" className="w-5 h-5" />
                  Distribution
                </h3>
                <div className="space-y-2">
                  <Input placeholder="Carrier name" className="text-sm" />
                </div>
              </div>

              {/* Warehouse Box */}
              <div className="border border-[#78D025]/30 rounded-lg p-4 bg-white/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#78D025]">
                  <Icon icon="mdi:warehouse" className="w-5 h-5" />
                  Warehouse
                </h3>
                <div className="space-y-2">
                  <Input placeholder="Warehouse name" className="text-sm" />
                </div>
              </div>
            </div>

            {/* Add Stock Button */}
            <div className="flex justify-end mb-6">
              <Button variant="outline" className="flex items-center gap-2">
                <Icon icon="mdi:plus" className="w-5 h-5" />
                Add Stock
              </Button>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end mt-6">
          <Button className="px-8">Submit</Button>
        </div>
      </div>
    </div>
  );
}