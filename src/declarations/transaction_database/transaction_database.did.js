export const idlFactory = ({ IDL }) => {
  const Time = IDL.Int;
  const Supplier = IDL.Record({
    'certified_date' : Time,
    'name' : IDL.Text,
    'products' : IDL.Vec(IDL.Nat),
  });
  const Transaction = IDL.Record({
    'date' : Time,
    'productId' : IDL.Nat,
    'seller' : Supplier,
    'buyer' : Supplier,
    'location' : IDL.Text,
  });
  const Product = IDL.Record({
    'id' : IDL.Nat,
    'name' : IDL.Text,
    'transHistory' : IDL.Vec(Transaction),
  });
  return IDL.Service({
    'addProduct' : IDL.Func([IDL.Nat, IDL.Text], [], []),
    'addSupplier' : IDL.Func([Supplier], [], []),
    'addTransaction' : IDL.Func([Transaction], [], []),
    'getAllSuppliers' : IDL.Func([], [IDL.Vec(Supplier)], ['query']),
    'getHistory' : IDL.Func([IDL.Nat], [IDL.Vec(Transaction)], ['query']),
    'getProducts' : IDL.Func([], [IDL.Vec(Product)], ['query']),
    'getSupplier' : IDL.Func([IDL.Text], [IDL.Opt(Supplier)], ['query']),
    'resetCanister' : IDL.Func([], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
