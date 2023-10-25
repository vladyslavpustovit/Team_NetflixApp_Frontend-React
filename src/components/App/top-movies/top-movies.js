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
        <div className="flex flex-col items-center">
            {isLoading ? (
                <LoadingSpinner size={100}/>
            ) : (
                <>
            <HeroSection/>
            <h1 className='ml-1.5 text-2xl font-bold mb-6'>Top Movies</h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
                  {subset.map((movie, index) => (
                      <MovieCard key={'movie' + index} movie={movie} />
                  ))}
              </div>
            <div className="parent flex items-center gap-4">
                <ReactPaginate
                    className="paginate"
                    pageCount={totalPages}
                    onPageChange={handlePageChange}
                    forcePage={currentPage}
                    pageLinkClassName='PageLink'//this is the anchor(a) tage inside the pagination
                />
            </div>
                </>
            )}
        </div>
    );
}

export default TopMovies;