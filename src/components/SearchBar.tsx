import { Icon } from "@iconify/react";

export default function SearchBar() {
    return (
        <div className="grow flex flex-row items-center relative " >
            <input
                className="rounded-xl outline-none py-2 px-6 pr-12 text-[#78D025] placeholder:text-[#78D025] text-xs font-normal w-full border-[#78D025] border-[1px]"
                placeholder="Search for Groceries, Farmers, and more" 
            />
            <Icon icon="material-symbols:search" className="absolute right-4" color="#78D025"/>
        </div>
    )
}