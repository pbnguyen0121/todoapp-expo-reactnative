import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, StyleSheet } from "react-native";
import { Modal, Portal } from "react-native-paper";
import DropDownPicker from "react-native-dropdown-picker";
import colors from "../theme/colors";

const TaskModal = ({ visible, onClose, onSave, task }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const priorityOptions = [
    { label: "High Priority 🔴", value: "High" },
    { label: "Medium Priority 🟡", value: "Medium" },
    { label: "Low Priority 🟢", value: "Low" },
  ];

  useEffect(() => {
    if (task) {
      setTaskName(task.name);
      setDescription(task.desc);
      setPriority(task.priority);
    } else {
      setTaskName("");
      setDescription("");
      setPriority("Medium");
    }
  }, [task]);

  const handleSaveTask = () => {
    if (!taskName.trim()) return;
    onSave({
      id: task?.id || Date.now().toString(),
      name: taskName.trim(),
      desc: description,
      priority,
    });
    onClose();
  };

  return (
    <Portal>
      <Modal visible={visible} onDismiss={onClose} contentContainerStyle={styles.modal}>
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{task ? "Edit Task" : "Add New Task"}</Text>

          <TextInput
            style={styles.input}
            placeholder="Task Title"
            value={taskName}
            onChangeText={setTaskName}
          />

          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Description"
            multiline
            value={description}
            onChangeText={setDescription}
          />

          <View style={{ zIndex: 1000 }}>
            <DropDownPicker
              open={isDropdownOpen}
              value={priority}
              items={priorityOptions}
              setOpen={setDropdownOpen}
              setValue={setPriority}
              placeholder="Select Priority"
              style={styles.dropdown}
              dropDownContainerStyle={styles.dropdownContainer}
              listMode="MODAL"
              modalTitle="Select Priority"
              modalProps={{ animationType: "slide" }}
              portalEnabled={true}
            />
          </View>

          <View style={styles.actions}>
            <Pressable style={styles.saveBtn} onPress={handleSaveTask}>
              <Text style={styles.saveText}>Save</Text>
            </Pressable>
            <Pressable style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </Portal>
  );
};

export default TaskModal;

const styles = StyleSheet.create({
  modal: {
    justifyContent: "center", // ✅ căn giữa dọc
    alignItems: "center",
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)", // ✅ nền mờ tự nhiên iOS
  },
  innerContainer: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    width: "90%",
    maxWidth: 500,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 12,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 8,
    padding: 10,
    marginVertical: 6,
    fontSize: 15,
    backgroundColor: "#fff",
  },
  dropdown: {
    borderColor: colors.gray,
    borderRadius: 8,
    marginTop: 6,
    backgroundColor: "#fff",
  },
  dropdownContainer: {
    borderColor: colors.gray,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
  saveBtn: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  saveText: { color: "#fff", fontWeight: "bold" },
  cancelBtn: {
    backgroundColor: colors.danger,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  cancelText: { color: "#fff", fontWeight: "bold" },
});
