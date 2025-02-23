// page.tsx (Server Component)
import COMPANIES_LIST from "@/lib/data"
import ClientPage from './client-page';

export default function Page({ params }: { params: { id: string } }) {
  if (!(params.id in COMPANIES_LIST)) return "Nothing found :(";

  const company = COMPANIES_LIST[params.id];

  return <ClientPage company={company} />;
}