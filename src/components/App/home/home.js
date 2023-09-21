import "./home.css";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { useAuthContext } from "../../../hooks/useAuthContext";
import { MovieCard } from "../content/movieCard";
import HeroSection from "../content/hero-section/hero-section";
import {usePagination} from "../../../hooks/usePagination";
import LoadingSpinner from "../content/loading-spinner";

export default function Home() {
  const { user } = useAuthContext();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/movies", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const json = await response.json();
        setMovies(json);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); 
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
      {loading ? (
          <LoadingSpinner/>
      ) : (
        <>
          <HeroSection/>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 px-6">
            {subset.map((data) => (
              <MovieCard key={data.id} movie={data} />
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
