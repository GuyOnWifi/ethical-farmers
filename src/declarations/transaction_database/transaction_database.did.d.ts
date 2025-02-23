import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface Product {
  'id' : bigint,
  'name' : string,
  'transHistory' : Array<Transaction>,
}
export interface Supplier {
  'certified_date' : Time,
  'name' : string,
  'products' : Array<bigint>,
}
export type Time = bigint;
export interface Transaction {
  'date' : Time,
  'productId' : bigint,
  'seller' : string,
  'buyer' : string,
  'location' : string,
}
export interface _SERVICE {
  'addProduct' : ActorMethod<[bigint, string, string], undefined>,
  'addSupplier' : ActorMethod<[Supplier], undefined>,
  'addTransaction' : ActorMethod<[Transaction], undefined>,
  'getAllSuppliers' : ActorMethod<[], Array<Supplier>>,
  'getHistory' : ActorMethod<[bigint], Array<Transaction>>,
  'getProducts' : ActorMethod<[], Array<Product>>,
  'getSupplier' : ActorMethod<[string], [] | [Supplier]>,
  'resetCanister' : ActorMethod<[], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
