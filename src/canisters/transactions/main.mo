import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";

actor transactionDB {
    
    // Define a transaction type
    type Transaction = {
        date: Nat;
        category: Text;
        location: Text;
        seller: Text;
        buyer: Text;
    };

    // Define a product type
    type Product = {
        id: Nat;
        name: Text;
        transHistory: [Transaction];
    };

    // Store all products
    private var products: [Product] = [];

    // Function to add a new product
    public shared func addProduct(id: Nat, name: Text) : async () {
        let newProduct: Product = { id = id; name = name; transHistory = [] };
        products := Array.append(products, [newProduct]);
    };

    // Function to add a transaction to a specific product by ID
    public shared func addTransaction(productId: Nat, t: Transaction) : async () {
        let updatedProducts = Array.map<Product, Product>(products, func(p) {
            if (p.id == productId) {
                { id = p.id; name = p.name; transHistory = Array.append(p.transHistory, [t]) };
            } else {
                p;
            }
        });
        products := updatedProducts;
    };

    // Function to get the transaction history of a product by ID
    public shared query func getHistory(productId: Nat) : async [Transaction] {
        for (p in products.vals()) {
            if (p.id == productId) {
                return p.transHistory;
            }
        };
        return [];
    };

    // Function to get all products (optional)
    public shared query func getProducts() : async [Product] {
        return products;
    };
}
