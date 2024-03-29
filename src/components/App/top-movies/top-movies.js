import React, {useEffect, useState} from "react";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";
import {MovieCard} from "../content/movieCard";
import HeroSection from "../content/hero-section/hero-section";
import {usePagination} from "../../../hooks/usePagination";
import ReactPaginate from "react-paginate";
import LoadingSpinner from "../content/loading-spinner";

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

    // Pagination
    const itemsPerPage = 16;
    const {
        currentPage,
        totalPages,
        subset,
        handlePageChange,
    } = usePagination(movies, itemsPerPage);


    return(
        <div className="container m-auto">
            {isLoading ? (
                <LoadingSpinner size={100}/>
            ) : (
                <>
            <HeroSection/>
            <h1 className='text-2xl font-bold mb-6 text-center'>Top Movies</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
                  {subset.map((movie, index) => (
                      <MovieCard key={'movie' + index} movie={movie} />
                  ))}
              </div>
                    {totalPages > 0 && (
                        <div className="parent flex items-center gap-4">
                            <ReactPaginate
                                className="paginate"
                                pageCount={totalPages}
                                onPageChange={handlePageChange}
                                forcePage={currentPage}
                                pageLinkClassName="PageLink"
                            />
                        </div>
                    )}
                </>
            )}
        </div>
    );
}

export default TopMovies;