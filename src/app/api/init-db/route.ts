import { transaction_database } from "@/declarations/transaction_database";

// Products with real Canadian sustainable/organic products
const PRODUCTS = [
    { id: 0, name: "Organic McIntosh Apples" },
    { id: 1, name: "Fair Trade Dark Roast Coffee" },
    { id: 2, name: "Free Range Omega-3 Eggs" },
    { id: 3, name: "Organic Red Spring Wheat Flour" },
    { id: 4, name: "Sustainable Atlantic Salmon" },
    { id: 5, name: "Organic Canadian Maple Syrup" },
    { id: 6, name: "Fair Trade Chocolate Bars" },
    { id: 7, name: "Organic Canadian Wild Blueberries" },
    { id: 8, name: "Grass-Fed Beef" },
    { id: 9, name: "Organic Red Lentils" },
    { id: 10, name: "Sustainable Canola Oil" },
    { id: 11, name: "Organic Steel Cut Oats" },
    { id: 12, name: "Fair Trade Green Tea" },
    { id: 13, name: "Organic Hemp Seeds" },
    { id: 14, name: "Sustainable Rainbow Trout" }
];

// Major Canadian suppliers/producers
const SUPPLIERS = [
    {
        id: "naturespathfoods",
        name: "Nature's Path Foods",
        location: "Richmond, BC",
        products: [4, 12, 14],  // Flour, oats, hemp
        certified_date: BigInt(Date.UTC(2020, 1, 15))
    },
    {
        id: "ethicalbeancoffee",
        name: "Ethical Bean Coffee",
        location: "Vancouver, BC",
        products: [2],  // Coffee
        certified_date: BigInt(Date.UTC(2019, 6, 22))
    },
    {
        id: "mapleleaforganicfarms",
        name: "Maple Leaf Organic Farms",
        location: "Durham, ON",
        products: [1, 8],  // Apples, blueberries
        certified_date: BigInt(Date.UTC(2021, 3, 10))
    },
    {
        id: "burnbraefarms",
        name: "Burnbrae Farms",
        location: "Lyn, ON",
        products: [3],  // Eggs
        certified_date: BigInt(Date.UTC(2018, 11, 5))
    },
    {
        id: "truenorthsalmonco",
        name: "True North Salmon Co.",
        location: "Saint John, NB",
        products: [5, 15],  // Salmon, trout
        certified_date: BigInt(Date.UTC(2020, 8, 30))
    },
    {
        id: "stlawrencedistillers",
        name: "St-Lawrence Distillers",
        location: "Quebec City, QC",
        products: [6],  // Maple syrup
        certified_date: BigInt(Date.UTC(2019, 2, 15))
    },
    {
        id: "camino",
        name: "Camino",
        location: "Ottawa, ON",
        products: [7],  // Chocolate
        certified_date: BigInt(Date.UTC(2021, 5, 8))
    },
    {
        id: "bluerangefarms",
        name: "Blue Range Farms",
        location: "Calgary, AB",
        products: [9],  // Beef
        certified_date: BigInt(Date.UTC(2020, 4, 12))
    },
    {
        id: "agtfoodandingredients",
        name: "AGT Food and Ingredients",
        location: "Regina, SK",
        products: [10],  // Lentils
        certified_date: BigInt(Date.UTC(2019, 9, 25))
    },
    {
        id: "richardsonoilseed",
        name: "Richardson Oilseed",
        location: "Winnipeg, MB",
        products: [11],  // Canola oil
        certified_date: BigInt(Date.UTC(2021, 1, 18))
    }
];

// Major Canadian retailers/distributors
const BUYERS = [
    {
        id: "costco",
        name: "Costco",
        location: "Ottawa, ON",
        certified_date: BigInt(Date.UTC(2020, 7, 12)),
        products: [0, 1, 2] // Assigned first 3 products
    },
    {
        id: "loblaws",
        name: "Loblaws",
        location: "Brampton, ON",
        certified_date: BigInt(Date.UTC(2018, 11, 15)),
        products: [3, 4, 5] // Assigned next 3 products
    },
    {
        id: "walmart",
        name: "Walmart",
        location: "Toronto, ON",
        certified_date: BigInt(Date.UTC(2019, 5, 10)),
        products: [6, 7, 8] // Assigned next 3 products
    },
    {
        id: "sobeys",
        name: "Sobeys",
        location: "Stellarton, NS",
        certified_date: BigInt(Date.UTC(2019, 0, 1)),
        products: [9, 10] // Assigned next 3 products
    },
    {
        id: "freshco",
        name: "FreshCo",
        location: "Vancouver, BC",
        certified_date: BigInt(Date.UTC(2018, 8, 5)),
        products: [11, 12] // Assigned last 3 products
    },
    {
        id: "metro",
        name: "Metro",
        location: "Montreal, QC",
        certified_date: BigInt(Date.UTC(2020, 2, 20)),
        products: [13, 14] // No products left to assign
    }
]

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

        // Add all products
        for (const product of PRODUCTS) {
            await transaction_database.addProduct(BigInt(product.id), product.name);
        }
        console.log("Products added");

        // Add all suppliers
        for (const supplier of SUPPLIERS) {
            await transaction_database.addSupplier({
                certified_date: supplier.certified_date,
                name: supplier.id,
                products: supplier.products.map(id => BigInt(id))
            });
        } 
        console.log("Suppliers added");

        // Add all suppliers
        for (const buyer of BUYERS) {
            await transaction_database.addSupplier({
                certified_date: buyer.certified_date,
                name: buyer.id,
                products: buyer.products.map(id => BigInt(id))
            });
        } 
        console.log("Buyers added");

        // Generate 20 transactions over the past 2 years
        const startDate = new Date(2023, 0, 1).getTime();
        const endDate = new Date().getTime();

        for (let i = 0; i < 20; i++) {
            // Random date between start and end
            const transactionDate = BigInt(
                Math.floor(startDate + Math.random() * (endDate - startDate))
            );

            // Random supplier
            const supplier = SUPPLIERS[Math.floor(Math.random() * SUPPLIERS.length)];
            
            // Random product from supplier's products
            const productId = supplier.products[
                Math.floor(Math.random() * supplier.products.length)
            ];

            // Random buyer
            const buyer = BUYERS[Math.floor(Math.random() * BUYERS.length)];

            // Random location
            const location = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];

            await transaction_database.addTransaction({
                date: transactionDate,
                productId: BigInt(productId),
                location: location,
                seller: {
                    certified_date: supplier.certified_date,
                    name: supplier.name,
                    products: supplier.products.map(id => BigInt(id))
                },
                buyer: {
                    certified_date: buyer.certified_date,
                    name: buyer.name,
                    products: []  // Buyers don't supply products
                }
            });
        }
        console.log("Transactions added");

        return new Response("Database populated with 20 transactions", { status: 200 });
    } catch (error: unknown) {
        console.error("Error populating database:", error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        return new Response(`Error populating database: ${errorMessage}`, { status: 500 });
    }
}