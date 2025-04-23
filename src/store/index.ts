import { Middleware, configureStore } from '@reduxjs/toolkit'

import pokemonsReducer from './pokemons/pokemons';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { pokemonApi } from './api/pokeApi';
// import { localStorageMiddleware } from './middleware/localStorage-middleware';

export const store = configureStore({
  reducer: {
      pokemons: pokemonsReducer,
      pokemon: pokemonsReducer,
      [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware), 
  // middleware: ( getDefaultMiddleware ) => getDefaultMiddleware()
  // .concat( localStorageMiddleware as Middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// solo para joder