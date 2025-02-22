import Image from "next/image";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import strawcactus from "../../public/strawcactus.png";

export default function NavBar() {
    return (
        <nav className="flex flex-row gap-8 h-16 p-4 px-8 items-center justify-between overflow-hidden bg-[#F2FFE6] rounded-md">
            <Icon icon="material-symbols:menu" color="#212521" className="h-full w-auto"></Icon>
            <Icon icon="lucide:wheat" color="#212521" className="h-full w-auto"></Icon>
            <div className="px-16 grow">
                <SearchBar />
            </div>
            <div className="flex flex-row gap-2 justify-center items-center">
                <span className="text-black grow text-xs">Welcome Back,<br />Eason Huang</span>
                <Image src={strawcactus} alt="A cactus" width={20} height={20} className="bg-white rounded-full"></Image>
            </div>
        </nav>
    )
}