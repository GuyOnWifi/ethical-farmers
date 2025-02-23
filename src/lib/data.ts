interface Company {
    imageURL: string;
    name: string;
    certificates: number;
    rating: number;
}

interface Product {
    id: number;
    name: string;
    price: number;
    imageURL: string;
}

const COMPANIES_LIST: { [key: string]: Company } = {
    "costco": {
        imageURL: "/costco.svg",
        name: "Costco Wholesale",
        certificates: 2,
        rating: 4.5,
    },
    "loblaws": {
        imageURL: "/loblaws.svg",
        name: "Loblaws",
        certificates: 2,
        rating: 4.5,
    },
    "walmart": {
        imageURL: "/walmart.svg",
        name: "Walmart",
        certificates: 2,
        rating: 4.5,
    },
    "sobeys": {
        imageURL: "/sobeys.svg",
        name: "Sobeys",
        certificates: 2,
        rating: 4.5,
    },
    "freshco": {
        imageURL: "/freshco.svg",
        name: "FreshCo",
        certificates: 2,
        rating: 4.5,
    },
    "metro": {
        imageURL: "/metro.svg",
        name: "Metro",
        certificates: 2,
        rating: 4.5,
    },
    "sweet-dreams": {
        imageURL: "/sweet-dreams.svg",
        name: "Sweet Dreams Teashop",
        certificates: 2,
        rating: 5,
    },
    "sweet-a": {
        imageURL: "/sweet-dreams.svg",
        name: "Sweet Dreamsa Teashop",
        certificates: 2,
        rating: 5,
    },
    "sweet-b": {
        imageURL: "/sweet-dreams.svg",
        name: "Sweet Dreamws Teashop",
        certificates: 2,
        rating: 5,
    },
}

// Major Canadian suppliers/producers
const SUPPLIERS_LIST: { [key: string]: Company & { certified_date: bigint } } = {
    "naturespathfoods": {
        name: "Nature's Path Foods",
        certified_date: BigInt(Date.UTC(2020, 1, 15)),
        imageURL: "/suppliers/natures-path.svg",
        certificates: 2,
        rating: 4.5
    },
    "ethicalbeancoffee": {
        name: "Ethical Bean Coffee",
        certified_date: BigInt(Date.UTC(2019, 6, 22)),
        imageURL: "/suppliers/ethical-bean.svg",
        certificates: 2,
        rating: 4.7
    },
    "mapleleaforganicfarms": {
        name: "Maple Leaf Organic Farms",
        certified_date: BigInt(Date.UTC(2021, 3, 10)),
        imageURL: "/suppliers/maple-leaf.svg",
        certificates: 2,
        rating: 4.3
    },
    "burnbraefarms": {
        name: "Burnbrae Farms",
        certified_date: BigInt(Date.UTC(2018, 11, 5)),
        imageURL: "/suppliers/burnbrae.svg",
        certificates: 2,
        rating: 4.6
    },
    "truenorthsalmonco": {
        name: "True North Salmon Co.",
        certified_date: BigInt(Date.UTC(2020, 8, 30)),
        imageURL: "/suppliers/true-north.svg",
        certificates: 2,
        rating: 4.4
    },
    "stlawrencedistillers": {
        name: "St-Lawrence Distillers",
        certified_date: BigInt(Date.UTC(2019, 2, 15)),
        imageURL: "/suppliers/st-lawrence.svg",
        certificates: 2,
        rating: 4.8
    },
    "camino": {
        name: "Camino",
        certified_date: BigInt(Date.UTC(2021, 5, 8)),
        imageURL: "/suppliers/camino.svg",
        certificates: 2,
        rating: 4.6
    },
    "bluerangefarms": {
        name: "Blue Range Farms",
        certified_date: BigInt(Date.UTC(2020, 4, 12)),
        imageURL: "/suppliers/blue-range.svg",
        certificates: 2,
        rating: 4.5
    },
    "agtfoodandingredients": {
        name: "AGT Food and Ingredients",
        certified_date: BigInt(Date.UTC(2019, 9, 25)),
        imageURL: "/suppliers/agt.svg",
        certificates: 2,
        rating: 4.4
    },
    "richardsonoilseed": {
        name: "Richardson Oilseed",
        certified_date: BigInt(Date.UTC(2021, 1, 18)),
        imageURL: "/suppliers/richardson.svg",
        certificates: 2,
        rating: 4.5
    }
};

const PRODUCTS_LIST: Product[] = [
    {
        id: 0,
        name: "Organic McIntosh Apples",
        price: 4.99,
        imageURL: "/products/apples.svg"
    },
    {
        id: 1,
        name: "Fair Trade Dark Roast Coffee",
        price: 16.99,
        imageURL: "/products/coffee.svg"
    },
    {
        id: 2,
        name: "Free Range Omega-3 Eggs",
        price: 7.99,
        imageURL: "/products/eggs.svg"
    },
    {
        id: 3,
        name: "Organic Red Spring Wheat Flour",
        price: 8.99,
        imageURL: "/products/flour.svg"
    },
    {
        id: 4,
        name: "Sustainable Atlantic Salmon",
        price: 24.99,
        imageURL: "/products/salmon.svg"
    },
    {
        id: 5,
        name: "Organic Canadian Maple Syrup",
        price: 19.99,
        imageURL: "/products/maple-syrup.svg"
    },
    {
        id: 6,
        name: "Fair Trade Chocolate Bars",
        price: 5.99,
        imageURL: "/products/chocolate.svg"
    },
    {
        id: 7,
        name: "Organic Canadian Wild Blueberries",
        price: 6.99,
        imageURL: "/products/blueberries.svg"
    },
    {
        id: 8,
        name: "Grass-Fed Beef",
        price: 29.99,
        imageURL: "/products/beef.svg"
    },
    {
        id: 9,
        name: "Organic Red Lentils",
        price: 5.99,
        imageURL: "/products/lentils.svg"
    },
    {
        id: 10,
        name: "Sustainable Canola Oil",
        price: 9.99,
        imageURL: "/products/canola-oil.svg"
    },
    {
        id: 11,
        name: "Organic Steel Cut Oats",
        price: 7.99,
        imageURL: "/products/oats.svg"
    },
    {
        id: 12,
        name: "Fair Trade Green Tea",
        price: 6.99,
        imageURL: "/products/green-tea.svg"
    },
    {
        id: 13,
        name: "Organic Hemp Seeds",
        price: 12.99,
        imageURL: "/products/hemp-seeds.svg"
    },
    {
        id: 14,
        name: "Sustainable Rainbow Trout",
        price: 22.99,
        imageURL: "/products/trout.svg"
    },
    {
        id: 15,
        name: "Organic Baby Spinach",
        price: 5.99,
        imageURL: "/products/spinach.svg"
    },
    {
        id: 16,
        name: "Organic Sweet Potatoes",
        price: 3.99,
        imageURL: "/products/sweet-potatoes.svg"
    },
    {
        id: 17,
        name: "Local Honey",
        price: 12.99,
        imageURL: "/products/honey.svg"
    },
    {
        id: 18,
        name: "Organic Quinoa",
        price: 8.99,
        imageURL: "/products/quinoa.svg"
    },
    {
        id: 19,
        name: "Wild Pacific Halibut",
        price: 28.99,
        imageURL: "/products/halibut.svg"
    },
    {
        id: 20,
        name: "Organic Chia Seeds",
        price: 11.99,
        imageURL: "/products/chia-seeds.svg"
    },
    {
        id: 21,
        name: "Fair Trade Cocoa Powder",
        price: 9.99,
        imageURL: "/products/cocoa.svg"
    },
    {
        id: 22,
        name: "Organic Wild Rice",
        price: 13.99,
        imageURL: "/products/wild-rice.svg"
    },
    {
        id: 23,
        name: "Free Range Turkey",
        price: 32.99,
        imageURL: "/products/turkey.svg"
    },
    {
        id: 24,
        name: "Organic Maple Granola",
        price: 8.99,
        imageURL: "/products/granola.svg"
    },
    {
        id: 25,
        name: "Sustainable Arctic Char",
        price: 26.99,
        imageURL: "/products/arctic-char.svg"
    },
    {
        id: 26,
        name: "Fair Trade Jasmine Tea",
        price: 6.99,
        imageURL: "/products/Jasmine.svg"
    },
    {
        id: 27,
        name: "Fair Trade Jasmine Tea",
        price: 6.99,
        imageURL: "/products/Jasmine.svg"
    },
    {
        id: 28,
        name: "Organic Mangoes",
        price: 5.99,
        imageURL: "/products/Mango.svg"
    },
    
];

export { COMPANIES_LIST, PRODUCTS_LIST, SUPPLIERS_LIST };
export type { Company, Product };