import COMPANIES_LIST from "@/lib/data"
import Image from "next/image";
import { Icon } from "@iconify/react";
import SearchBar from '../../../components/SearchBar'
import { DirectionAwareHover } from '../../../components/direction-aware-hover'

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  if (!(id in COMPANIES_LIST)) return "Nothing found :(";

  const company = COMPANIES_LIST[id];

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
    <div className="flex flex-col items-center">
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

      {/* Grid of DirectionAwareHover boxes */}
      <div className="w-full mt-8 px-8">
        <div className="grid grid-cols-5 gap-8">
          {products.map((product, index) => (
            <div key={index} className="flex justify-center">
              <DirectionAwareHover 
                imageUrl={product.imageUrl}
                className="h-48 w-48 md:h-48 md:w-48" // Override the default sizes
              >
                <p className="font-bold text-lg">{product.title}</p>
                <p className="font-normal text-xs">{product.price}</p>
              </DirectionAwareHover>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}