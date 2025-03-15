type Type =
  | "normal"
  | "fire"
  | "water"
  | "electric"
  | "grass"
  | "ice"
  | "fighting"
  | "poison"
  | "ground"
  | "flying"
  | "psychic"
  | "bug"
  | "rock"
  | "ghost"
  | "dragon"
  | "dark"
  | "steel"
  | "fairy"
  | "";

export type Pokemon = {
  id: string;
  species: string;
  name: string;
  weight: number;
  height: number;
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
  type: Type[];
  description: string;
  imageUrl: string;
  voiceUrl: string;
  createdAt: Date;
  updatedAt: Date;
};
