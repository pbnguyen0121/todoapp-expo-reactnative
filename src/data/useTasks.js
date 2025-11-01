import { useState } from "react";

/**
 * Custom hook to manage all task operations: add, update, delete, and sort by priority.
 */
export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  // Sort tasks High → Medium → Low
  const sortTasksByPriority = (taskList) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return [...taskList].sort(
      (a, b) => (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4)
    );
  };

  const handleAddTask = (newTask) => {
    setTasks((prev) => sortTasksByPriority([{ ...newTask, id: Date.now().toString() }, ...prev]));
  };

  const handleUpdateTask = (updatedTask) => {
    setTasks((prev) => {
      const updated = prev.map((t) => (t.id === updatedTask.id ? updatedTask : t));
      return sortTasksByPriority(updated);
    });
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return { tasks, handleAddTask, handleUpdateTask, handleDeleteTask };
}
