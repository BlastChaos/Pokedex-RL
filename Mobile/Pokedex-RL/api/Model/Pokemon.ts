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

export class Pokemon {
  id!: string;
  species!: string;
  name!: string;
  foundBy!: string;
  weight!: number;
  height!: number;
  hp!: number;
  attack!: number;
  defense!: number;
  speAttack!: number;
  speDefense!: number;
  speed!: number;
  type!: Type;
  description!: string;
  number!: number;
  imageUrl!: string;
  voiceUrl!: string;
}
