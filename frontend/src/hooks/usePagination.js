import { useState, useMemo, useEffect } from "react";

export function usePagination(items, itemsPerPage = 10) {
  const [currentPage, setCurrentPage] = useState(1);

  const safeItems = items || [];
  const totalPages = Math.ceil(safeItems.length / itemsPerPage);

  const paginatedItems = useMemo(() => {
    if (!items || !Array.isArray(items)) return [];

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return items.slice(startIndex, endIndex);
  }, [items, currentPage, itemsPerPage]);

  // Resetear a página 1 cuando cambia el número de items
  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [safeItems.length, currentPage, totalPages]);

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    paginatedItems,
  };
}
