import HeroSection from "@/components/Hero";
import CompanyList from "@/components/CompanyList";

import { transaction_database } from "@/declarations/transaction_database";

export default function Home() {
  
  console.log(transaction_database);
  
  transaction_database.addSupplier({
    "certified_date": BigInt(12345),
    "name": "test2",
    "products": [BigInt(0), BigInt(1)]
  })

  
  return (
    <>
      <HeroSection />
      <CompanyList />
    </>
  );
}
