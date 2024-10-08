import { Pokemon } from "@/api/Model/Pokemon";
import { useObject } from "@realm/react";
type Props = {
  pokemonId: string;
};

export const PokemonInfo: React.FC<Props> = (props: Props) => {
  const { pokemonId } = props;
  const pokemon = useObject(Pokemon, pokemonId);
  if (!pokemon) {
    return <div> pokemon not found!</div>;
  }
  return (
    <>
      {/* <h1 className="font-medium text-4xl">Pokedex</h1>
      {store.capture.image}

      <input type="file" onChange={store.handleCaptureImage} />
      <button onClick={store.fetchVoice} className="p-2 bg-gray-200 rounded">
        Submit
      </button>

      {store.capture.image ? (
        <img src={store.capture.image} className="rounded-lg max-h-[200px]" />
      ) : (
        <div className="h-24 w-48 bg-gray-200 rounded-lg max-h-[200px]"></div>
      )}
      {store.capture.voiceUrl && (
        <audio src={store.capture.voiceUrl} controls autoPlay playsInline />
      )}
      <div>Voice Token: {store.capture.voiceJobToken}</div>
      <div>Voice Status: {store.capture.voiceStatus}</div>
      <div>Voice URL: {store.capture.voiceUrl}</div> */}
      <div>Name: {pokemon.name}</div>
      <div>Species: {pokemon.species}</div>
      <div>Weight: {pokemon.weight}</div>
      <div>Height: {pokemon.height}</div>
      <div>HP: {pokemon.hp}</div>
      <div>Attack: {pokemon.attack}</div>
      <div>Defense: {pokemon.defense}</div>
      <div>Special Attack: {pokemon.speAttack}</div>
      <div>Special Defense: {pokemon.speDefense}</div>
      <div>Speed: {pokemon.speed}</div>
      <div>Type: {pokemon.type}</div>
      <div>Description: {pokemon.description}</div>
    </>
  );
};
