import { appSchema, tableSchema } from "@nozbe/watermelondb";

export const schema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "pokemons",
      columns: [
        { name: "created_at", type: "number" },
        { name: "updated_at", type: "number" },
        { name: "species", type: "string" },
        { name: "name", type: "string" },
        { name: "weight", type: "number" },
        { name: "height", type: "number" },
        { name: "hp", type: "number" },
        { name: "attack", type: "number" },
        { name: "defense", type: "number" },
        { name: "special_attack", type: "number" },
        { name: "special_defense", type: "number" },
        { name: "speed", type: "number" },
        { name: "type", type: "string" },
        { name: "description", type: "string" },
        { name: "image_url", type: "string" },
        { name: "voice_url", type: "string" },
      ],
    }),
  ],
});
