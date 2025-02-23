import { Actor, HttpAgent } from "@dfinity/agent";

// Imports and re-exports candid interface
import { idlFactory } from "./transaction_database.did.js";
export { idlFactory } from "./transaction_database.did.js";

/* CANISTER_ID is replaced by webpack based on node environment
 * Note: canister environment variable will be standardized as
 * process.env.CANISTER_ID_<CANISTER_NAME_UPPERCASE>
 * beginning in dfx 0.15.0
 */
export const canisterId =
  "be2us-64aaa-aaaaa-qaabq-cai";

let actorCache = null;

export const createActor = (canisterId, options = {}) => {
  if (actorCache) return actorCache;

  const agent = options.agent || new HttpAgent({ ...options.agentOptions, host: "http://localhost:4943/" });

  if (options.agent && options.agentOptions) {
    console.warn(
      "Detected both agent and agentOptions passed to createActor. Ignoring agentOptions and proceeding with the provided agent."
    );
  }

  // Fetch root key for certificate validation during development
  if (process.env.DFX_NETWORK !== "ic") {
    agent.fetchRootKey().catch((err) => {
      console.warn(
        "Unable to fetch root key. Check to ensure that your local replica is running"
      );
      console.error(err);
    });
  }

  // Creates an actor with using the candid interface and the HttpAgent
  actorCache = Actor.createActor(idlFactory, {
    agent,
    canisterId,
    ...options.actorOptions,
  });
  return actorCache;
};

export const transaction_database = canisterId ? createActor(canisterId) : undefined;
