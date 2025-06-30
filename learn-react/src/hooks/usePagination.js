import { useState, useMemo } from "react";

export const usePagination = (totalEntries, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = useMemo(() => {
    return Math.ceil(totalEntries / itemsPerPage);
  }, [totalEntries, itemsPerPage]);

  const getPageNumbers = useMemo(() => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }, [totalPages, itemsPerPage]);

  const nextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1), totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1), 1);
  };

  const goToPage = (pageNumber) => {
    const pageToNavigate = Math.max(1, Math.min(pageNumber, totalPages));
    setCurrentPage(pageToNavigate);
  };

  const offset = useMemo(() => {
    return (currentPage - 1) * itemsPerPage;
  }, [currentPage, itemsPerPage]);

  return {
    currentPage,
    totalPages,
    offset,
    nextPage,
    prevPage,
    goToPage,
    getPageNumbers,
  };
};
