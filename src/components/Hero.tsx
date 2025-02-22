import Image from "next/image";
import circle from "../../public/circle.svg";
import { Globe } from "./globe";

export default function HeroSection() {
    return (
        <section id="hero" className="bg-[#78D025] rounded-sm flex flex-row">
            <div className="h-full flex flex-col justify-center items-center text-left pl-24 space-y-12">
                <h1 className="w-full font-bold text-6xl">Seize the Future of Ethical Agriculture</h1>
                <p className="w-full">
                    Building a transparent future for agriculture where ethical farming practices are verified, valued, and rewarded.
                </p>
                <div className="bg-black rounded-md p-4 px-14 self-start">Shop Now</div>
            </div>
            <Globe />
        </section>
    )
}