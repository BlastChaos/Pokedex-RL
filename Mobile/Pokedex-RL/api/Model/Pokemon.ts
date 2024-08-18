import { Realm } from "@realm/react";
import { BSON, ObjectSchema } from "realm";

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
  type!: number;
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
