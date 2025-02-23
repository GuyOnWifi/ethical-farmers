import { transaction_database } from "@/declarations/transaction_database";
import { PRODUCTS_LIST, COMPANIES_LIST, SUPPLIERS_LIST } from "@/lib/data";

const COMPANY_KV = Object.entries(COMPANIES_LIST);
const SUPPLIERS_KV = Object.entries(SUPPLIERS_LIST);

// Canadian locations for transactions
const LOCATIONS = [
    "Toronto, ON",
    "Vancouver, BC",
    "Montreal, QC",
    "Calgary, AB",
    "Edmonton, AB",
    "Ottawa, ON",
    "Winnipeg, MB",
    "Quebec City, QC",
    "Halifax, NS",
    "Victoria, BC"
];

export async function GET() {
    try {

        await transaction_database.resetCanister();
        console.log("Canister reset");

        // Add all suppliers
        for (const [id, data] of SUPPLIERS_KV) {
            await transaction_database.addSupplier({
                certified_date: data.certified_date,
                name: id,
                products: []
            });
        }
        console.log("Suppliers added");

        for (const [id, data] of COMPANY_KV) {
            await transaction_database.addSupplier({
                certified_date: BigInt(99999),
                name: id,
                products: []
            });
        }
        console.log("Big companies added")

        // Add all products
        for (const product of PRODUCTS_LIST) {
            await transaction_database.addTransaction({
                date: BigInt(99999),
                productId: BigInt(product.id),
                productName: product.name,
                location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
                seller: SUPPLIERS_KV[Math.floor(Math.random() * SUPPLIERS_KV.length)][0],
                buyer: COMPANY_KV[Math.floor(Math.random() * COMPANY_KV.length)][0]
            });
        }
        console.log("Products added");

        return new Response("Database populated with 20 transactions", { status: 200 });
    } catch (error: unknown) {
        console.error("Error populating database:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return new Response(`Error populating database: ${errorMessage}`, { status: 500 });
    }
}