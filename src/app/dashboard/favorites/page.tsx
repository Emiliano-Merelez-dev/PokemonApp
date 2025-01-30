import { FavoritesPokemons, PokemonsResponse, SimplePokemon } from "@/pokemons/index";
import { PokemonGrid} from "@/pokemons/index";

const getPokemons = async(limit = 20, offset= 0 ):Promise<SimplePokemon[]> => {
  const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
  const data: PokemonsResponse = await response.json(); 

  //todo modificamos lo que manejará correctamente la respuesta de la solicitud fetch y obtendrá los datos reales de la respuesta antes de intentar acceder a data.results
    // const data: PokemonsResponse = fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    // .then( res => res.json() );


    const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name,
    }));

    // throw new Error('La re put madre');

    return pokemons;
}



export const metadata = {
 title: 'favoritos ',
 description: 'Pagina de los pokemones',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">

      <span className="text-5xl my-2">pokemons favoritos <small className="text-blue-700"></small></span>

      {/* <PokemonGrid pokemons={[]}/> */}
      <FavoritesPokemons />

    </div>
  );
}