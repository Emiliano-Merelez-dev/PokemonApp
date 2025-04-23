import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Tipos de la respuesta de la API
type PokemonResult = {
  name: string;
  url: string;
};

type PokemonResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonResult[];
};

// Creamos la API
export const pokemonApi = createApi({
  reducerPath: 'pokeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemons: builder.query<PokemonResponse, { limit?: number; offset?: number }>({
      query: ({ limit = 10, offset = 500 }) => `pokemon?limit=${limit}&offset=${offset}`,
    }),
  }),
});

// Exportamos el hook generado automáticamente
export const { useGetPokemonsQuery } = pokemonApi;
