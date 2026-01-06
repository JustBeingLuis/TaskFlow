import { useState, useMemo, useEffect } from "react";

export function useTaskFilters(tasks) {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [sortOrder, setSortOrder] = useState("newest");

  // Filtrar, buscar y ordenar tareas
  const filteredTasks = useMemo(() => {
    if (!tasks || !Array.isArray(tasks)) return [];

    return tasks
      .filter((task) => {
        // Filtro por búsqueda
        const matchesSearch = task.title
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

        // Filtro por estado
        if (filterStatus === "completed")
          return task.completed && matchesSearch;
        if (filterStatus === "pending") return !task.completed && matchesSearch;
        return matchesSearch;
      })
      .sort((a, b) => {
        // Ordenar por fecha de creación
        if (a.created_at && b.created_at) {
          const dateA = new Date(a.created_at);
          const dateB = new Date(b.created_at);
          return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        }
        // Si no hay created_at, ordenar por ID
        return sortOrder === "newest"
          ? b.id.localeCompare(a.id)
          : a.id.localeCompare(b.id);
      });
  }, [tasks, searchQuery, filterStatus, sortOrder]);

  return {
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortOrder,
    setSortOrder,
    filteredTasks,
  };
}
