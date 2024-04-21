import React from "react";
import { MoviesList } from "@modules/MoviesList";
import { useGetMoviesQuery } from "@store/moviesApi";
import { Loader } from "@components/Loader/Loader";
import { Header } from "@components/Header/Header";

export const NowPlayingMovies = () => {
    const {
        data: { results: movies } = {},
        isError,
        isLoading,
    } = useGetMoviesQuery("now_playing");

    return (
        <>
            <Header />
            {isLoading && <Loader />}
            {isError && <h2>Error fetching data..</h2>}
            <MoviesList movies={movies} />
        </>
    );
};
