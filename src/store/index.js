import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { moviesApi } from "./moviesApi";
import { singleMovieApi } from "./singleMovieApi";

export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    [singleMovieApi.reducerPath]: singleMovieApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), moviesApi.middleware, singleMovieApi.middleware],
  devTools: true,
});

setupListeners(store.dispatch);
