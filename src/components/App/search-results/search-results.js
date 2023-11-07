import React, { useEffect, useState } from 'react';
import {useLocation} from 'react-router-dom';
import LoadingSpinner from "../content/loading-spinner";
import {MovieCard} from "../content/movieCard";
import ReactPaginate from "react-paginate";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";
import {usePagination} from "../../../hooks/usePagination";

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');

    const {fetchMovieList, isLoading} = useMoviesCatalog();
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchMovieList();
                const filteredData = data.filter((movie) => movie.name.toLowerCase().includes(searchQuery.toLowerCase()));
                setSearchResults(filteredData);
            } catch (error) {
                console.error("An error occurred while fetching data:", error);
            }
        };
        fetchData();
    }, [searchQuery]);

    // Pagination
    const itemsPerPage = 16;
    const {
        currentPage,
        totalPages,
        subset,
        handlePageChange,
    } = usePagination(searchResults, itemsPerPage);

    return(
        <div className="flex flex-col items-center mt-8">
            {isLoading ? (
                <LoadingSpinner size={100}/>
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
                            pageLinkClassName='PageLink'//this is the anchor(a) tage inside the pagination
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default SearchResults;