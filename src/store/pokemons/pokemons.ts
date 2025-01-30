import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon}
}

// const getInitialState = (): PokemonsState => {
//   const favorites = JSON.parse( localStorage.getItem('favorites-pokemons') ?? '{}' );

//   return favorites
// }

const initialState: PokemonsState = {
    favorites: {},
    // ...getInitialState(),  
    // '1': { id: '1', name: 'bulbasur' },
    // '3': { id: '3', name: 'venusaur' },
    // '4': { id: '4', name: 'charmander' },


}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {

    setFavoritesPokemons( state, action: PayloadAction<{ [key: string]: SimplePokemon }> ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon> ){
        const pokemon = action.payload;
        const { id } = pokemon;

        if ( !!state.favorites[id] ) {
            delete state.favorites[id];
            return//
        } else {
          state.favorites[id] = pokemon;
        }

        // todo: no se debe hacer
        localStorage.setItem('favorites-pokemons', JSON.stringify( state.favorites ) );

    }

  }
});

export const {toggleFavorite, setFavoritesPokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer