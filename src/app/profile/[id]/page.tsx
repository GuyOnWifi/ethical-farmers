// page.tsx (Server Component)
import COMPANIES_LIST from "@/lib/data"
import ClientPage from './client-page';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;

  if (!(id in COMPANIES_LIST)) return "Nothing found :(";

  const company = COMPANIES_LIST[id];

  return <ClientPage company={company} id={id} />;
}