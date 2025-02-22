import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import CompanyItem from "./CompanyItem";
import COMPANIES_LIST from "@/lib/data";

export default function CompanyList() {
    return (
        <section className="flex flex-col gap-6 px-24 pt-12 text-black ">
            <div className="flex font-bold gap-24">
                <header className="w-1/2">
                    <h1 className="text-2xl">Search for Verified Ethical Suppliers & Produce</h1>
                </header>
                <SearchBar />
            </div>
            <div className="flex flex-row gap-2 ">
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
                <div className="flex flex-row items-center justify-center bg-[#D04D25]/50 rounded-lg px-2 py-1 gap-1 text-sm">
                    <Icon icon="carbon:checkmark-filled" color="#D04D25" />
                    <span className="text-[#D04D25]">Gluten-free verified</span>
                </div>     
            </div>
            <div className="flex flex-row flex-wrap gap-4 justify-center relative pt-8 gap-y-8">
                {Object.entries(COMPANIES_LIST).map(([id, comp]) => {
                    return <CompanyItem company={comp} key={comp.name} id={id} />
                })}
            </div>
            <div className="text-right cursor-pointer hover:underline">More &gt;</div>
        </section>
    )
}