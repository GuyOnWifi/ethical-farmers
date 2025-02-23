// page.tsx (Server Component)
import { COMPANIES_LIST } from "@/lib/data"
import ClientPage from './client-page';

export async function generateStaticParams() {
  // Generate the paths for each ID

  return Object.keys(COMPANIES_LIST).map((id) => ({
    id: id,
  }))
}

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!(id in COMPANIES_LIST)) return "Nothing found :(";

  const company = COMPANIES_LIST[id];

  return <ClientPage company={company} id={id} />;
}