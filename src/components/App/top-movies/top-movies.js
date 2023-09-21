import React, {useEffect, useState} from "react";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";
import {MovieCard} from "../content/movieCard";
import {Spinner} from "@material-tailwind/react";
import HeroSection from "../content/hero-section/hero-section";

const TopMovies = () => {
    const {fetchMovieList, isLoading} = useMoviesCatalog();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieList();
                // Sort the movies by rating (assuming rating is a number)
                data.sort((a, b) => b.rating - a.rating);
                setMovies(data);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return(
        <div className="flex flex-col items-center">
                {isLoading && <Spinner className="h-1/6 w-1/6 text-red-600/80" />}
            <HeroSection/>
            <h1 className='ml-1.5 text-2xl font-bold mb-6'>Top Movies</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
                  {movies.map((movie) => (
                      <MovieCard key={movie.id} movie={movie} />
                  ))}
              </div>
        </div>
    );
}

export default TopMovies;