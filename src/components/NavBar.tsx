import Image from "next/image";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import strawcactus from "../../public/strawcactus.png";
import Link from "next/link";

export default function NavBar() {
    return (
        <nav className="flex flex-row gap-8 min-h-16 p-4 px-8 items-center justify-between overflow-hidden bg-[#F2FFE6] rounded-md">
            <Icon icon="material-symbols:menu" color="#212521" className="h-full w-auto cursor-pointer"></Icon>
            <Link href="/" className="cursor-pointer">
                <Icon icon="lucide:wheat" color="#212521" className="h-full w-auto"></Icon>
            </Link>
            <div className="px-16 grow">
                <SearchBar />
            </div>
            <div className="flex flex-row gap-4 justify-center items-center">
                <span className="text-black grow text-xs">Welcome Back,<br />Eason Huang</span>
                <Image src={strawcactus} alt="A cactus" width={40} height={40} className="bg-white rounded-full"></Image>
            </div>
        </nav>
    )
}