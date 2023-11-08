import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import LoadingSpinner from "../content/loading-spinner";
import {MovieCard} from "../content/movieCard";
import ReactPaginate from "react-paginate";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";
import {usePagination} from "../../../hooks/usePagination";
import {useMoviesByGenre} from "../../../hooks/useMoviesByGenre";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const genreQuery = new URLSearchParams(location.search).get('genre');

    const { isLoading: isLoadingByGenre, fetchMoviesByGenre } = useMoviesByGenre();
    const {fetchMovieList, isLoading: isLoadingCatalog} = useMoviesCatalog();
    const [searchResults, setSearchResults] = useState([]);
    const [notFoundMessage, setNotFoundMessage] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            setNotFoundMessage(''); // Clear message on each request
            try {
                let filteredData = [];

                // Show a list of movies according to user search query
                if (searchQuery) {
                    const data = await fetchMovieList();
                    filteredData = data.filter((movie) => movie.name.toLowerCase().includes(searchQuery.toLowerCase()));

                    // Show message if there is a search query from user but no movies found
                    if (filteredData.length === 0) {
                        setNotFoundMessage(`No movies found for the query: ${searchQuery}`);
                    }
                }

                // Show a list of movies according to user click on genre
                else if (genreQuery) {
                    filteredData = await fetchMoviesByGenre(genreQuery);
                    // Show message if there is a click on genre from user but no movies found
                    if (filteredData.length === 0) {
                        setNotFoundMessage(`No movies found for the genre: ${genreQuery}`);
                    }
                }

                // Default message when no query or genre
                else {
                    setNotFoundMessage('No movies found.');
                }

                setSearchResults(filteredData);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };
        fetchData();
    }, [searchQuery, genreQuery]);

    // Pagination
    const itemsPerPage = 16;
    const {
        currentPage,
        totalPages,
        subset,
        handlePageChange,
    } = usePagination(searchResults, itemsPerPage);

    return (
        <div className="flex flex-col items-center mt-8">
            {isLoadingByGenre || isLoadingCatalog ? (
                <LoadingSpinner size={100} />
            ) : (
                <>
                    {notFoundMessage ? (
                        <div className='text-xl lg:text-4xl font-extrabold h-[60vh] flex items-center'>{notFoundMessage}</div>
                    ) : (
                        <>
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
                                    pageLinkClassName='PageLink'
                                />
                            </div>
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default SearchResults;