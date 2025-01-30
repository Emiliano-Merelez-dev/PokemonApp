'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./pokemonGrid"
import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {

  const favoritePokemon = useAppSelector(state => Object.values(state.pokemons.favorites ) ); 
//   const [pokemons, setPokemons] = useState( favoritePokemon );

  return (
    <>
        {
            favoritePokemon.length === 0
            ? (<NoFavorites />)
            : (<PokemonGrid pokemons={ favoritePokemon } />)
        }
    </>
  )
}

export const NoFavorites = () => {
    return(
        <div className="flex flex-col h-[50vh] items-center justify-center ">
            <IoHeartOutline size={100} className="text-red-600"/>
            <span>No Hay Favoritos</span>
        </div>
    )

}