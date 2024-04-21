import React from "react";
import classes from "./MoviesList.module.scss";
import { MovieCard } from "@components/MovieCard/MovieCard";

export const MoviesList = ({ movies }) => {

  return (
    <div className={classes.moviesList}>
      {movies?.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
