import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

interface ComponentProps {
    id: string;
    company: {
        imageURL: string;
        name: string;
        certificates: number;
        rating: number;
    }
}

export default function CompanyItem(props: ComponentProps) {
    return (
        <>
            <Link href={`/profile/${props.id}`} className="border-[#78D025] border-[1px] rounded-md backdrop-blur-md flex justify-center items-center w-1/4 grow p-3 py-5 gap-3 hover:brightness-95 hover:scale-105 ease-in duration-150 cursor-pointer overflow-hidden">
                <Image src={props.company.imageURL} alt={`${props.company.name} logo`} height={50} width={50} className="w-1/2" />
                <div className="flex flex-col grow w-1/2">
                    <div className="flex items-center gap-2">
                        <span className="font font-bold text-sm">{props.company.name}</span>
                        <div className="flex gap-1">
                            <Icon icon="carbon:checkmark-filled" color="#2544AA" />
                            <Icon icon="carbon:checkmark-filled" color="#CCC612" />
                            <Icon icon="carbon:checkmark-filled" color="#78D025" />
                        </div>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Icon icon="carbon:checkmark-filled" />
                        <span className="text-xs">{props.company.certificates} certificates</span>
                    </div>
                    <div className="flex flex-row items-center gap-2">
                        <Icon icon="solar:star-bold" />
                        <span className="text-xs">{props.company.rating} star rating</span>
                    </div>
                </div>
            </Link>
        </>
    )
}