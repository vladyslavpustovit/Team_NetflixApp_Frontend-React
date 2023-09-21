import './categories.css';
import React, {useEffect, useState} from "react";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";
import CardsSection from "../content/cards-section";
import HeroSection from "../content/hero-section/hero-section";
function Categories() {
    
    const {fetchMovieList, isLoading} = useMoviesCatalog();
    const [movies, setMovies] = useState([]);
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieList();
                console.log(data)
                setMovies(data);
                sortByGenres(data)
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };


        const sortByGenres = (movies) => {
            const uniqueGenres = new Set();
            movies.forEach((movie) => {
                movie.genre.forEach((genre) => {
                    uniqueGenres.add(genre);
                });
            });
            setGenres(Array.from(uniqueGenres));
        }

        fetchData();
    }, []);
    return (
        <div className="flex flex-col items-center">
            {isLoading ? (
                <div className="loading-container h-full flex align-middle justify-center text-3xl p-10">
                    <h1>Loading...</h1>
                </div>
            ) : (
                <>
                    <HeroSection/>
                    <div className="mx-auto flex w-full gap-x-8 px-4 md:px-8 2xl:container">
                        <div className="my-4 w-full">
                            {genres.map((genre) => (
                                <CardsSection
                                    key={genre}
                                    name={genre}
                                    movies={movies.filter((movie) => movie.genre.includes(genre))}
                                />
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Categories;
