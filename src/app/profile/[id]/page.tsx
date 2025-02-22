import COMPANIES_LIST from "@/lib/data"
import Image from "next/image";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const id = (await params).id

  if (!(id in COMPANIES_LIST)) return "Nothing found :(";

  const company = COMPANIES_LIST[id];

  return (
    <div className="flex flex-col items-center">
      <Image src={company.imageURL} alt={`${company.name} logo`} height={50} width={50} className="h-24 w-auto" />
      <h1>{company.name}</h1>
    </div>
  )
}