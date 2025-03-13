import {
  date,
  field,
  json,
  readonly,
  text,
} from "@nozbe/watermelondb/decorators";
import { Model } from "@nozbe/watermelondb";

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

const sanitizeType = (rawTypes: any[]): Type[] => {
  return Array.isArray(rawTypes) ? rawTypes.map((types) => types as Type) : [];
};

export class Pokemon extends Model {
  static table = "pokemons";

  @text("species") species!: string;
  @text("name") name!: string;
  @field("weight") weight!: number;
  @field("height") height!: number;
  @field("hp") hp!: number;
  @field("attack") attack!: number;
  @field("defense") defense!: number;
  @field("special_attack") specialAttack!: number;
  @field("special_defense") specialDefense!: number;
  @field("speed") speed!: number;
  @json("type", sanitizeType) type!: Type[];
  @text("description") description!: string;
  @field("image_url") imageUrl!: string;
  @field("voice_url") voiceUrl!: string;
  @readonly @date("created_at") createdAt!: Date;
  @readonly @date("updated_at") updatedAt!: Date;
}
