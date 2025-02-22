import Array "mo:base/Array";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor transactionDB {
    type Product = {
        id: Nat;
        transHistory: [Nat];
    };
    
    type Transaction = {
        
    }
    private var products: [Product] = [];
    public shared func addProduct(p: Product){
        products := Array.append(products, [p]);
        return;
    }

    public shared func addTransaction: [t: Transaction]{

    }
}