import postgres from "postgres";
import { config } from "../config";
import { drizzle } from "drizzle-orm/postgres-js";
import { pokemons } from "./model/pokemons";

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(config.databaseUrl, { prepare: false });
export const db = drizzle({
  client,
  schema: {
    pokemon: pokemons,
  },
});
