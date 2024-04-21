import React from "react";
import { useParams } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import {
    singleMovieApi,
    useGetSingleMovieQuery,
    usePostLikeMovieMutation,
} from "@store/singleMovieApi";
import { convertToHoursMinutes } from "@helpers/index";
import { Loader } from "@components/Loader/Loader";
import { Header } from "@components/Header/Header";
import { useDispatch } from "react-redux";
import classes from "./SingleMovie.module.scss";

export const SingleMovie = () => {
    const { movieId } = useParams();
    
    const {
        data: {
            title,
            overview,
            backdrop_path,
            poster_path,
            budget,
            release_date,
            genres,
            production_companies,
            runtime,
            vote_average,
            vote_count,
        } = {},
        isLoading,
        refetch,
    } = useGetSingleMovieQuery(movieId);
    const [
        rateMovie, // This is the mutation trigger
    ] = usePostLikeMovieMutation();

    const { hours, remainingMinutes } = convertToHoursMinutes(runtime);
    const dispatch = useDispatch();

    const handleRateMovie = async () => {
        await rateMovie({ movieId, rating: 7 });
        refetch();
    };

    const refetchMovieData = async () => {
        const promise = dispatch(
            singleMovieApi.endpoints.getSingleMovie.initiate(movieId)
        );
        const { refetch } = promise;
        const { data, isLoading, isSuccess } = await promise;
        console.log(data, isLoading, isSuccess);
    };

    return (
        <>
            <Header />

            <div
                className={classes.movieContainer}
                style={{
                    backgroundImage: `linear-gradient(rgb(0 0 0 / 0%) 0%, rgb(26 26 29 / 63.5%) 63.5%, rgb(26 26 29) 100%), url(https://image.tmdb.org/t/p/original${backdrop_path})`,
                }}
            >
                {isLoading && <Loader />}
                <div className={classes.movieContent}>
                    <div className={classes.moviePoster}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                            alt="poster"
                        />
                    </div>
                    <div>
                        <p className={classes.title}>{title}</p>
                        <span onClick={handleRateMovie}>Rate movie</span>||
                        <span>{vote_average}</span>||
                        <span>{vote_count}</span>
                        <p>
                            <span className={classes.description}>
                                <strong>Overview: </strong>
                                {overview}
                            </span>
                        </p>
                        <p>${budget?.toLocaleString()}</p>
                        <p>{release_date}</p>
                        <div className={classes.genres}>
                            <p className={classes.genresHeading}>Genres</p>
                            <div className={classes.genresList}>
                                {genres?.map(genre => (
                                    <span
                                        key={genre.id}
                                        className={classes.genreItem}
                                    >
                                        {genre.name}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className={classes.productionCompanies}>
                            {production_companies?.map(company => (
                                <img
                                    key={company.id}
                                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                                    className={classes.companyLogo}
                                    alt="company-logo"
                                />
                            ))}
                        </div>
                        <div>
                            <BsClock /> {hours && <span>{hours}h</span>}{" "}
                            {remainingMinutes && (
                                <span>{remainingMinutes}m</span>
                            )}
                        </div>
                    </div>
                </div>

                <button onClick={refetchMovieData}>Refetch data</button>
            </div>
        </>
    );
};
