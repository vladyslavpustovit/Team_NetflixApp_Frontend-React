import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {useMovieDetails} from "../../../hooks/useMovieDetails";
import MovieHeader from "./movie-header";
import LoadingSpinner from "../content/loading-spinner";
import './movie-details.css'
import MovieTeaser from "./movie-teaser";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { fetchMovieById } = useMovieDetails();

    useEffect(() => {
        const fetchMovieDetails = async () => {
            if (movieId) {
                const movieData = await fetchMovieById(movieId);
                if (movieData) {
                    setMovie(movieData);
                } else {
                    console.log('Page not Found')
                }
            }
        };
        fetchMovieDetails();
    }, []);
    return (
        <div className="container m-auto">
            {!movie ? (
                <LoadingSpinner message='Loading...'/>
            ) : (
                <>
                    <MovieHeader movie={movie}/>
                    <MovieTeaser movie={movie}/>
                </>
                )}
        </div>
    );
};

export default MovieDetails;