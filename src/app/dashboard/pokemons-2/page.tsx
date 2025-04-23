'use client';

import { useState, useEffect } from 'react';
import { useGetPokemonsQuery } from '@/store/api/pokeApi';
import { PokemonGrid } from '@/pokemons';

type SimplePokemon = {
  id: string;
  name: string;
  image: string;
};

const MAX_POKEMONS = 650;
const limit = 5;

export default function PokemonsQueryPage() {
  const [offset, setOffset] = useState(500);
  const [pokemons, setPokemons] = useState<SimplePokemon[]>([]);
  const [isFetching, setIsFetching] = useState(false);

  const { data, isLoading, isError } = useGetPokemonsQuery({ limit: limit, offset });

  useEffect(() => {
    if (data?.results) {
      const newPokemons = data.results.map((pokemon) => {
        const id = pokemon.url.split('/').at(-2)!;
        return {
          id,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
        };
      });

      setPokemons((prev) => {
        const existingIds = new Set(prev.map((p) => p.id));
        const filteredNew = newPokemons.filter((p) => !existingIds.has(p.id));
        return [...prev, ...filteredNew];
      });

      // 🔓 Desbloquea el botón después de que se actualiza el estado
      setIsFetching(false);
    }
  }, [data]);

  const cargarMas = () => {
    if (isFetching || offset + limit >= MAX_POKEMONS) return;

    // 🔒 Bloquea el botón
    setIsFetching(true);
    setOffset((prev) => prev + limit);
  };

  const hasMore = offset + limit < MAX_POKEMONS;
  const buttonDisabled = isFetching || isLoading || !hasMore;

  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl my-2">
        Listado de pokémons dinámica <small className="text-green-600">RTK Query</small>
      </span>

      {isError && <p className="text-red-500">Error al cargar pokémons</p>}

      <PokemonGrid pokemons={pokemons} />

      {isLoading && <p className="text-yellow-400 my-2">Cargando más...</p>}

      <button
        onClick={cargarMas}
        disabled={buttonDisabled}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded disabled:bg-gray-400"
      >
        {hasMore ? (isFetching || isLoading ? 'Cargando...' : 'Cargar más pokémons') : 'No hay más pokémons para cargar'}
      </button>
    </div>
  );
}
