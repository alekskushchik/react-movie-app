import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getApiConfig } from "@helpers";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery(getApiConfig()),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: (type) => `movie/${type}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
