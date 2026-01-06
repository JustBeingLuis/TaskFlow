import { useState, useEffect, useMemo } from "react";
import api from "../services/api";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Cargar tareas
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await api.getTasks();
      const tasksData = Array.isArray(response)
        ? response
        : response.data || [];
      setTasks(tasksData);
      setError("");
    } catch (err) {
      console.error("❌ Error:", err.response);
      setError("Error al cargar las tareas");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Crear tarea
  const createTask = async (taskData) => {
    try {
      const response = await api.createTasks(taskData);
      const newTask = response.data?.[0] || response.data || response;
      setTasks((prevTasks) => [...prevTasks, newTask]);
      setError("");
      return newTask;
    } catch (err) {
      setError("Error al crear la tarea");
      console.error(err);
      throw err;
    }
  };

  // Actualizar tarea
  const updateTask = async (taskId, updates) => {
    const taskToUpdate = tasks.find((t) => t.id === taskId);

    // Actualizar UI optimísticamente
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === taskId ? { ...t, ...updates } : t))
    );

    try {
      await api.updateTasks(taskId, updates);
      setError("");
    } catch (err) {
      // Revertir cambio si falla
      setTasks((prevTasks) =>
        prevTasks.map((t) => (t.id === taskId ? taskToUpdate : t))
      );
      setError("Error al actualizar la tarea");
      console.error(err);
      throw err;
    }
  };

  // Toggle completado
  const toggleComplete = async (task) => {
    await updateTask(task.id, {
      title: task.title,
      completed: !task.completed,
    });
  };

  // Eliminar tarea
  const deleteTask = async (id) => {
    if (!confirm("¿Estás seguro de eliminar esta tarea?")) return;

    const taskToDelete = tasks.find((t) => t.id === id);
    setTasks((prevTasks) => prevTasks.filter((t) => t.id !== id));

    try {
      await api.deleteTasks(id);
      setError("");
    } catch (err) {
      setTasks((prevTasks) => [...prevTasks, taskToDelete]);
      setError("Error al eliminar la tarea");
      console.error(err);
    }
  };

  // Crear tareas con IA
  const createTasksWithAI = async (input) => {
    try {
      const response = await api.parseTasks(input);

      for (const task of response.tasks) {
        const newTask = await api.createTasks(task);
        const createdTask = newTask.data?.[0] || newTask.data || newTask;
        setTasks((prevTasks) => [...prevTasks, createdTask]);
      }

      setError("");
      return response;
    } catch (err) {
      setError("Error al crear tareas con IA");
      console.error(err);
      throw err;
    }
  };

  return {
    tasks,
    loading,
    error,
    setError,
    createTask,
    updateTask,
    toggleComplete,
    deleteTask,
    createTasksWithAI,
    refreshTasks: fetchTasks,
  };
}
