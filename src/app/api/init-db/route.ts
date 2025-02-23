import { transaction_database } from "@/declarations/transaction_database";
import { PRODUCTS_LIST, COMPANIES_LIST, SUPPLIERS_LIST } from "@/lib/data";

const COMPANY_KV = Object.entries(COMPANIES_LIST);
const SUPPLIERS_KV = Object.entries(SUPPLIERS_LIST);

// Sweet Dreams specific products
const SWEET_DREAMS_PRODUCTS = [
    BigInt(26), // Jasmine Tea
    BigInt(27), // Jasmine Tea
    BigInt(28), // Organic Mangoes
    BigInt(12), // Green Tea
    BigInt(0)   // Organic Apples
];

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

        // Add all companies, with special handling for Sweet Dreams
        for (const [id, data] of COMPANY_KV) {
            await transaction_database.addSupplier({
                certified_date: BigInt(99999),
                name: id,
                products: id === "sweet-dreams" ? SWEET_DREAMS_PRODUCTS : []
            });
        }
        console.log("Big companies added");

        // Add transactions for all products
        for (const product of PRODUCTS_LIST) {
            const buyer = product.id in SWEET_DREAMS_PRODUCTS 
                ? "sweet-dreams" 
                : COMPANY_KV[Math.floor(Math.random() * COMPANY_KV.length)][0];

            await transaction_database.addTransaction({
                date: BigInt(99999),
                productId: BigInt(product.id),
                productName: product.name,
                location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
                seller: SUPPLIERS_KV[Math.floor(Math.random() * SUPPLIERS_KV.length)][0],
                buyer: buyer
            });
        }
        console.log("Products added");

        // Add specific transactions for Sweet Dreams products
        for (const productId of SWEET_DREAMS_PRODUCTS) {
            const product = PRODUCTS_LIST.find(p => BigInt(p.id) === productId);
            if (product) {
                await transaction_database.addTransaction({
                    date: BigInt(99999),
                    productId: BigInt(product.id),
                    productName: product.name,
                    location: "Waterloo, ON", // Sweet Dreams location
                    seller: SUPPLIERS_KV[Math.floor(Math.random() * SUPPLIERS_KV.length)][0],
                    buyer: "sweet-dreams"
                });
            }
        }
        console.log("Sweet Dreams specific transactions added");

        return new Response("Database populated with transactions", { status: 200 });
    } catch (error: unknown) {
        console.error("Error populating database:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return new Response(`Error populating database: ${errorMessage}`, { status: 500 });
    }
}