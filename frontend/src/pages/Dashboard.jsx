import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

// Hooks
import { useTasks } from "../hooks/useTasks";
import { useTaskFilters } from "../hooks/useTaskFilters";
import { usePagination } from "../hooks/usePagination";
import { useStats } from "../hooks/useStats";

// Components
import Sidebar from "../components/Sidebar";
import DashboardHeader from "../components/DashboardHeader";
import StatsCards from "../components/StatsCards";
import TasksCharts from "../components/TasksCharts";
import TaskFilters from "../components/TaskFilters";
import TaskList from "../components/TaskList";
import Pagination from "../components/Pagination";
import TaskModal from "../components/TaskModal";

function Dashboard() {
  const navigate = useNavigate();

  // Custom hooks
  const {
    tasks,
    loading,
    error,
    setError,
    createTask,
    updateTask,
    toggleComplete,
    deleteTask,
    createTasksWithAI,
  } = useTasks();

  const {
    searchQuery,
    setSearchQuery,
    filterStatus,
    setFilterStatus,
    sortOrder,
    setSortOrder,
    filteredTasks,
  } = useTaskFilters(tasks);

  const { currentPage, setCurrentPage, totalPages, paginatedItems } =
    usePagination(filteredTasks, 10);

  const stats = useStats(tasks);

  // Debug logs
  console.log("Dashboard Debug:", {
    tasksLength: tasks?.length,
    filteredTasksLength: filteredTasks?.length,
    paginatedItemsLength: paginatedItems?.length,
    loading,
    stats,
  });

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);

  // Edit state
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  // Handlers
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleLogout = () => {
    api.logout();
    navigate("/");
  };

  const handleCreateTask = async (taskData) => {
    try {
      await createTask(taskData);
    } catch (err) {
      console.error("Error creating task:", err);
    }
  };

  const handleCreateTasksWithAI = async (input) => {
    if (!input.trim()) {
      setError("Por favor escribe algo");
      return;
    }

    setAiLoading(true);
    setError("");

    try {
      const response = await createTasksWithAI(input);
      alert(`✨ Se crearon ${response.count} tarea(s) con IA`);
    } catch (err) {
      console.error("Error creating tasks with AI:", err);
    } finally {
      setAiLoading(false);
    }
  };

  const handleStartEdit = (task) => {
    setEditingTask(task);
    setEditTitle(task.title);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
    setEditTitle("");
  };

  const handleSaveEdit = async (taskId) => {
    if (!editTitle.trim()) {
      setError("El título no puede estar vacío");
      return;
    }

    try {
      await updateTask(taskId, { title: editTitle });
      setEditingTask(null);
      setEditTitle("");
    } catch (err) {
      console.error("Error updating task:", err);
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar onCreateTask={handleOpenModal} onLogout={handleLogout} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <DashboardHeader />

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-8">
          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm rounded">
              {error}
            </div>
          )}

          {/* Stats Cards */}
          <StatsCards stats={stats} />

          {/* Charts */}
          <TasksCharts stats={stats} />

          {/* Filters */}
          <TaskFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterStatus={filterStatus}
            setFilterStatus={setFilterStatus}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            stats={stats}
            resultCount={(paginatedItems || []).length}
            totalFiltered={(filteredTasks || []).length}
          />

          {/* Tasks List */}
          <TaskList
            tasks={paginatedItems}
            loading={loading}
            onToggleComplete={toggleComplete}
            onStartEdit={handleStartEdit}
            onSaveEdit={handleSaveEdit}
            onCancelEdit={handleCancelEdit}
            onDelete={deleteTask}
            editingTask={editingTask}
            editTitle={editTitle}
            setEditTitle={setEditTitle}
            searchQuery={searchQuery}
          />

          {/* Pagination */}
          {!loading && filteredTasks && filteredTasks.length > 0 && (
            <div className="mt-6">
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
              />
            </div>
          )}
        </main>
      </div>

      {/* Modal */}
      <TaskModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onCreateTask={handleCreateTask}
        onCreateTasksWithAI={handleCreateTasksWithAI}
        aiLoading={aiLoading}
      />
    </div>
  );
}

export default Dashboard;
