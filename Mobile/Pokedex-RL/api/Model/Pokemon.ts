import { Realm } from "@realm/react";
import { BSON, ObjectSchema } from "realm";

export enum Type {
  Normal = 0,
  Fire = 1,
  Water = 2,
  Electric = 3,
  Grass = 4,
  Ice = 5,
  Fighting = 6,
  Poison = 7,
  Ground = 8,
  Flying = 9,
  Psychic = 10,
  Bug = 11,
  Rock = 12,
  Ghost = 13,
  Dragon = 14,
  Dark = 15,
  Steel = 16,
  Fairy = 17,
}

export class Pokemon extends Realm.Object<Pokemon> {
  _id!: BSON.ObjectId;
  species!: string;
  name!: string;
  weight!: number;
  height!: number;
  hp!: number;
  attack!: number;
  defense!: number;
  speAttack!: number;
  speDefense!: number;
  speed!: number;
  type!: Type;
  description!: number;
  imageUrl!: string;
  static schema: ObjectSchema = {
    name: "Pokemon",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      species: { type: "string" },
      name: { type: "string" },
      weight: { type: "string" },
      height: { type: "string" },
      hp: { type: "int" },
      attack: { type: "int" },
      defense: { type: "int" },
      speAttack: { type: "int" },
      speDefense: { type: "int" },
      speed: { type: "int" },
      description: { type: "int" },
    },
  };
}
