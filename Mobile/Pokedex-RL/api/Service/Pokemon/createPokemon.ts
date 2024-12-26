type Props = {
  photo: string;
};

export const createPokemon = async (props: Props): Promise<string> => {
  return Promise.resolve("Pokemon created");
};
