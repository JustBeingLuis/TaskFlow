import { useMemo } from "react";

export function useStats(tasks) {
  const stats = useMemo(() => {
    if (!tasks || !Array.isArray(tasks)) {
      return { total: 0, completed: 0, pending: 0, completionRate: 0 };
    }

    const total = tasks.length;
    const completed = tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const completionRate =
      total > 0 ? Math.round((completed / total) * 100) : 0;

    return { total, completed, pending, completionRate };
  }, [tasks]);

  return stats;
}
