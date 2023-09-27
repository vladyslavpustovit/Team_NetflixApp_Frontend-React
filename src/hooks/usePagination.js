import {useEffect, useState} from "react";
export const usePagination = (data, itemsPerPage) => {
    const [currentPage, setCurrentPage] = useState(0);
    const [subset, setSubset] = useState([]);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    useEffect(() => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const newSubset = data.slice(startIndex, endIndex);
        setSubset(newSubset);
    }, [data, currentPage, itemsPerPage]);

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };

    return {
        currentPage,
        totalPages,
        subset,
        handlePageChange,
    };
}