import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { MovieCard } from "../content/movieCard";
import HeroSection from "../content/hero-section/hero-section";
import {usePagination} from "../../../hooks/usePagination";
import LoadingSpinner from "../content/loading-spinner";
import {useMoviesCatalog} from "../../../hooks/useMoviesCatalog";


export default function Home() {
  const [movies, setMovies] = useState([]);
  const {fetchMovieList, isLoading} = useMoviesCatalog();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMovieList();
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


  return (
    <div className="container m-auto">
      {isLoading ? (
                <LoadingSpinner size={100}/>
      ) : (
        <>
          <HeroSection/>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
            {subset.map((data, index) => (
              <MovieCard key={'movie' + index} movie={data} />
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
