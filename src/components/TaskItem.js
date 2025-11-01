import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { IconButton } from "react-native-paper";
import colors from "../theme/colors";

/**
 * TaskItem component - renders one task card with edit/delete buttons.
 */
const TaskItem = ({ item, onEdit, onDelete }) => {
  const getPriorityColor = () => {
    switch (item.priority) {
      case "High":
        return colors.danger;
      case "Low":
        return colors.success;
      default:
        return colors.primary;
    }
  };

  return (
    <View style={[styles.container, { borderLeftColor: getPriorityColor() }]}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{item.name}</Text>
        {item.desc ? <Text style={styles.desc}>📝 {item.desc}</Text> : null}
      </View>
      <View style={styles.actions}>
        <IconButton icon="pencil" iconColor={colors.primary} size={22} onPress={() => onEdit(item)} />
        <IconButton icon="delete" iconColor={colors.danger} size={22} onPress={() => onDelete(item.id)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.card,
    padding: 14,
    marginBottom: 10,
    borderRadius: 10,
    borderLeftWidth: 6,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    color: colors.text,
    fontSize: 17,
    fontWeight: "600",
  },
  desc: {
    color: colors.gray,
    fontStyle: "italic",
    marginTop: 4,
  },
  actions: {
    flexDirection: "row",
  },
});

export default TaskItem;
