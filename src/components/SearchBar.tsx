import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="grow flex flex-row items-center relative" >
            <input
                className="rounded-xl py-2 px-6 pr-12 text-[#78D025] placeholder:text-[#78D025] text-xs w-full"
                placeholder="Search for Groceries, Farmers, and more" 
            />
            <Icon icon="material-symbols:search" className="absolute right-4" color="#78D025"/>
        </div>
    )
}