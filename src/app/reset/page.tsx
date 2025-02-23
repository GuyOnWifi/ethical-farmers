import { transaction_database } from "@/declarations/transaction_database";
import { PRODUCTS_LIST, COMPANIES_LIST, SUPPLIERS_LIST } from "@/lib/data";

const COMPANY_KV = Object.entries(COMPANIES_LIST);
const SUPPLIERS_KV = Object.entries(SUPPLIERS_LIST);

// Restaurant-specific products
const SWEET_DREAMS_PRODUCTS = [
    BigInt(26), // Jasmine Tea
    BigInt(27), // Organic Mangoes
    BigInt(12), // Green Tea
    BigInt(0)   // Organic Apples
];

const MYUNG_GA_PRODUCTS = [
    BigInt(15), // Organic Baby Spinach
    BigInt(2),  // Free Range Omega-3 Eggs
    BigInt(8),  // Grass-Fed Beef
    BigInt(22), // Organic Wild Rice
    BigInt(4)   // Sustainable Atlantic Salmon
];

const KENS_PRODUCTS = [
    BigInt(4),  // Sustainable Atlantic Salmon
    BigInt(14), // Sustainable Rainbow Trout
    BigInt(19), // Wild Pacific Halibut
    BigInt(25), // Sustainable Arctic Char
    BigInt(31)  // Sustainable Mussels
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

// Helper function to determine if a product belongs to a specific restaurant
function getRestaurantForProduct(productId: number): string | null {
    const id = BigInt(productId);
    if (SWEET_DREAMS_PRODUCTS.includes(id)) return "sweet-dreams";
    if (MYUNG_GA_PRODUCTS.includes(id)) return "MyungGa";
    if (KENS_PRODUCTS.includes(id)) return "Kens";
    return null;
}

export default async function ResetPage() {
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

        // Add all companies, with special handling for restaurants
        for (const [id, data] of COMPANY_KV) {          
            await transaction_database.addSupplier({
                certified_date: BigInt(99999),
                name: id,
                products: []
            });
        }
        console.log("Companies and restaurants added");

        // Add transactions for all products
        for (const product of PRODUCTS_LIST) {
            const restaurantOwner = getRestaurantForProduct(product.id);
            const buyer = restaurantOwner || 
                COMPANY_KV[Math.floor(Math.random() * COMPANY_KV.length)][0];

            await transaction_database.addTransaction({
                date: BigInt(99999),
                productId: BigInt(product.id),
                productName: product.name,
                location: LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)],
                seller: SUPPLIERS_KV[Math.floor(Math.random() * SUPPLIERS_KV.length)][0],
                buyer: buyer
            });
        }
        console.log("Products and transactions added");

        return (
            <div>Succeeded!</div>
        )
    } catch (error: unknown) {
        console.error("Error populating database:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return (
            <div>No work sad</div>
        )
    }
}