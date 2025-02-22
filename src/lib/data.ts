interface Company {
    imageURL: string;
    name: string;
    certificates: number;
    rating: number;
}

const COMPANIES_LIST : { [key:string]: Company } = {
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
}

export default COMPANIES_LIST;