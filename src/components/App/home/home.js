import './home.css';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useAuthContext } from '../../../hooks/useAuthContext';
import { MovieCard } from '../../App/content/movieCard';

export default function Home() {
  const { user } = useAuthContext();
  const [movies, setMovies] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 16;

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
      }
    };
    fetchData();
  }, []);

// pagination 
  const totalPages = Math.ceil(movies.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = movies.slice(startIndex, endIndex);
  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  return (
    <div className=''>
    {/* cards part  */}
      <div className="grid grid-cols-4 gap-5 px-6">
        {subset.map((data) => (
          <MovieCard key={data.id} movie={data} />
          ))}
      </div>

          {/* pagination part */}
      <div className='parent px-6'>
        <ReactPaginate
          className="pagi "
          pageCount={totalPages}
          onPageChange={handlePageChange}
          forcePage={currentPage}
        />
      </div>
    </div>
  );
}