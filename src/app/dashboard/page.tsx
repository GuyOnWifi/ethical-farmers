"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { transaction_database } from "@/declarations/transaction_database";

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

  const [storeMsg, setStoreMsg] = useState<string>("");
  const [produceMsg, setProduceMsg] = useState<string>("");

  
  const [nameInput, setNameInput] = useState("");
  const [produceInput, setProduceInput] = useState("");
  const [farmInput, setFarmInput] = useState("");
  const [storeInput, setStoreInput] = useState("");

  const onStoreClick = async () => {
    if (!nameInput) {
      window.alert("Please input a name!");
      return;
    };
    setStoreMsg("Setting...")
    try {
      await transaction_database.addSupplier({
        name: nameInput,
        certified_date: BigInt(Date.now()),
        products: []
      })
      setStoreMsg("Success!");
    } catch(err) {
      setStoreMsg("Something went wrong. Try again.");
    }
    setTimeout(() => {
      setStoreMsg("");
    }, 2000)
  }

  const onProduceAdd = async () => {
    if (!produceInput || !farmInput || !storeInput) {
      window.alert("Please input all fields!");
      return;
    };

    setProduceMsg("Setting...")
    try {
      await transaction_database.addTransaction({
        productId: BigInt(Math.floor(Math.random() * 10000)),
        productName: produceInput,
        date: BigInt(Date.now()),
        location: "here",
        seller: farmInput,
        buyer: storeInput
      })
      setProduceMsg("Success!");
    } catch(err) {
      setProduceMsg("Something went wrong. Try again.");
    }
    setTimeout(() => {
      setProduceMsg("");
    }, 2000)
  }

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
            Add Your Data to Our Database
          </h1>
          <p className="text-lg text-gray-700 mx-auto text-start ">
            We believe in shaping a transparent future for agriculture for everybody.
          </p>
        </div>

        {/* Main Content Sections */}
        <div className="flex gap-6">
          {/* Left Section - 1/3 width */}
          <div className="w-1/3 bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h1 className="text-[#78D025] pb-4 font-bold">Add your store to our database</h1>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#78D025] mb-1">Name</label>
                <Input id="name" placeholder="Enter name" value={farmInput} onChange={(e) => setFarmInput(e.target.value)} />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#78D025] mb-1">Certifications</label>
                <Input id="certifications" placeholder="Enter certifications" />
              </div>
              <div className="flex justify-end gap-4 items-center">
                {storeMsg && <span className="text-[#78D025] ml-auto">{storeMsg}</span>}
                <Button variant="outline" className="flex items-center gap-2" onClick={onStoreClick}>
                  <Icon icon="mdi:plus" className="w-5 h-5" />
                  Add
                </Button>
              </div>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="w-px bg-[#78D025]/30" />

          {/* Right Section - 2/3 width */}
          <div className="flex-grow bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg">
            <h1 className="text-[#78D025] pb-4 font-bold">Add your purchases to our database</h1>
            {/* Produce Field */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#78D025] mb-1">Produce</label>
              <Input id="produce" placeholder="Enter produce details" className="w-full" value={produceInput} onChange={(e) => setProduceInput(e.target.value)} />
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
                  <Input id="farm-name" placeholder="Farm name" className="text-sm" value={farmInput} onChange={(e) => setFarmInput(e.target.value)}/>
                </div>
              </div>

              {/* Store Box */}
              <div className="border border-[#78D025]/30 rounded-lg p-4 bg-white/50">
                <h3 className="font-semibold mb-2 flex items-center gap-2 text-[#78D025]">
                  <Icon icon="mdi:store" className="w-5 h-5" />
                  Store
                </h3>
                <div className="space-y-2">
                  <Input id="store-name" placeholder="Store name" className="text-sm" value={storeInput} onChange={(e) => setStoreInput(e.target.value)}/>
                </div>
              </div>
            </div>

            {/* Add Stock Button */}
            <div className="flex justify-end mb-6 gap-4">
              {produceMsg && <span className="text-[#78D025] ml-auto">{produceMsg}</span>}
              <Button variant="outline" className="flex items-center gap-2" onClick={onProduceAdd}>
                <Icon icon="mdi:plus" className="w-5 h-5" />
                Add Stock
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}