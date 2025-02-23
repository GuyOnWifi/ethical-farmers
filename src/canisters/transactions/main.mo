import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor transactionDB {

    // Define a supplier
    type Supplier = {
        name : Text;
        certified_date : Time.Time;
        products : [Nat];
    };

    // Define a transaction type
    type Transaction = {
        date : Time.Time;
        productId : Nat;
        location : Text;
        seller : Supplier;
        buyer : Supplier;
    };

    // Define a product type
    type Product = {
        id : Nat;
        name : Text;
        transHistory : [Transaction];
    };

    // Store all products
    private var products : [Product] = [];
    private var suppliers : [Supplier] = [];

    // Function to add a new product
    public shared func addProduct(id : Nat, name : Text) : async () {
        let newProduct : Product = { id = id; name = name; transHistory = [] };
        products := Array.append(products, [newProduct]);
    };

    // Function to add a transaction to a specific product by ID
    public shared func addTransaction(t : Transaction) : async () {
        let updatedProducts = Array.map<Product, Product>(
            products,
            func(p) {
                if (p.id == t.productId) {
                    {
                        id = p.id;
                        name = p.name;
                        transHistory = Array.append(p.transHistory, [t]);
                    };
                } else {
                    p;
                };
            },
        );
        products := updatedProducts;
    };

    // Function to get the transaction history of a product by ID
    public shared query func getHistory(productId : Nat) : async [Transaction] {
        for (p in products.vals()) {
            if (p.id == productId) {
                return p.transHistory;
            };
        };
        return [];
    };

    // Function to get all products
    public shared query func getProducts() : async [Product] {
        return products;
    };

    // Add a supplier
    public shared func addSupplier(s : Supplier) : async () {
        suppliers := Array.append(suppliers, [s]);
        return;
    };

    // Get a supplier by its farm name
    public shared query func getSupplier(id : Text) : async ?Supplier {
        return Array.find<Supplier>(suppliers, func(s) { s.name == id });
    };

    // Get all suppliers
    public shared query func getAllSuppliers() : async [Supplier] {
        return suppliers;
    };

    public shared func resetCanister() : async () {
        products := [];
        suppliers := [];
    }
};
