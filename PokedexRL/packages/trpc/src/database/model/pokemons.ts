import {
  integer,
  pgEnum,
  pgTable,
  real,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const type = {
  normal: "normal",
  fire: "fire",
  water: "water",
  electric: "electric",
  grass: "grass",
  ice: "ice",
  fighting: "fighting",
  poison: "poison",
  ground: "ground",
  flying: "flying",
  psychic: "psychic",
  bug: "bug",
  rock: "rock",
  ghost: "ghost",
  dragon: "dragon",
  dark: "dark",
  steel: "steel",
  fairy: "fairy",
} as const;

export type Type = (typeof type)[keyof typeof type];
const types = Object.values(type) as [string, ...string[]];
export const typeEnum = pgEnum("type", types);

export const pokemons = pgTable("pokemons", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  species: varchar().notNull(),
  name: varchar().notNull(),
  weight: real().notNull(),
  height: real().notNull(),
  hp: integer().notNull(),
  attack: integer().notNull(),
  defense: integer().notNull(),
  specialAttack: integer().notNull(),
  specialDefense: integer().notNull(),
  speed: integer().notNull(),
  type1: typeEnum().notNull(),
  type2: typeEnum(),
  description: text().notNull(),
  imageKey: varchar().notNull(),
  voiceKey: varchar().notNull(),
  createdAt: timestamp().notNull(),
  updatedAt: timestamp().notNull(),
});

export type Pokemon = typeof pokemons.$inferSelect
