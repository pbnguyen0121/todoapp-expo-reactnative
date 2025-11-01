import React, { useState } from "react";
import { StyleSheet, Text, FlatList, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useTasks from "../data/useTasks";
import TaskItem from "../components/TaskItem";
import TaskModal from "../components/TaskModal";
import colors from "../theme/colors";

/**
 * Main screen: shows all tasks, handles add/edit/delete
 */
const TodoScreen = () => {
  const { tasks, handleAddTask, handleUpdateTask, handleDeleteTask } = useTasks();
  const [isModalVisible, setModalVisible] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const openModal = (task = null) => {
    setCurrentTask(task);
    setModalVisible(true);
  };

  const handleSaveTask = (task) => {
    if (currentTask) handleUpdateTask(task);
    else handleAddTask(task);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>

      <TouchableOpacity style={styles.addButton} onPress={() => openModal()}>
        <Text style={styles.addButtonText}>+ Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskItem item={item} onEdit={openModal} onDelete={handleDeleteTask} />
        )}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<Text style={styles.emptyText}>No tasks yet. Add one above 👆</Text>}
        contentContainerStyle={{ paddingVertical: 10 }}
      />

      <TaskModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onSave={handleSaveTask}
        task={currentTask}
      />
    </SafeAreaView>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  addButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  emptyText: {
    textAlign: "center",
    color: colors.gray,
    marginTop: 40,
  },
});
