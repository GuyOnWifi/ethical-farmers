import Array "mo:base/Array";
import Text "mo:base/Text";
import Time "mo:base/Time";

actor SupplierDatabase {
    type Supplier = {
        farm_name: Text;
        certified_date: Time.Time;
        crops: [Text];
    };

    private var suppliers: [Supplier] = [];

    // Add a supplier
    public shared func addSupplier(s: Supplier) : async () {
        suppliers := Array.append(suppliers, [s]);
        return;
    };

    // Get a supplier by its farm name
    public shared query func getSupplier(id: Text) : async ?Supplier {
        return Array.find<Supplier>(suppliers, func(s) { s.farm_name == id });
    };

    // Get all suppliers
    public shared query func getAllSuppliers() : async [Supplier] {
        return suppliers;
    };
}