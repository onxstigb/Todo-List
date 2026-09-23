import { useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { BottomTabInset, MaxContentWidth, Spacing } from "@/constants/theme";

export default function HomeScreen() {
  const [item, setItem] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);

  function addItem() {
    if (item.trim() === "") {
      return; // Don't add empty items
    }
    setTasks([...tasks, item.trim()]);
    setItem("");
  }

  function deleteItem(index: number) {
    const newTask = tasks.filter((item, itemIndex) => itemIndex !== index);

    setTasks(newTask);
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>To-Do List</Text>
        <TextInput
          style={styles.input}
          placeholder="Add an item..."
          value={item}
          onChangeText={setItem}
        />
        <Pressable style={styles.button} onPress={addItem}>
          <Text style={styles.buttonText}>Add Item</Text>
        </Pressable>
        <FlatList
          style={styles.listContainer}
          data={tasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.taskItem}>
              <Text style={styles.taskText}>{item}</Text>
              <Pressable onPress={() => deleteItem(index)}>
                <Ionicons name="trash" size={18} color="red" />
              </Pressable>
            </View>
          )}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "row",
    paddingTop: 25,
    // backgroundColor: "#FFFAE3",
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: "center",
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 28,
    color: "#161925",
  },
  input: {
    borderWidth: 1,
    borderColor: "#161925",
    borderRadius: 5,
    padding: 12,
    width: "100%",
  },
  button: {
    backgroundColor: "#65743A",
    padding: 12,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: "#FDFFFC",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
  listContainer: {
    width: "100%",
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#FCFCFC",
    // width: "100%",
    marginTop: 10,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 16,
  },
  deleteText: {
    color: "red",
    fontWeight: "bold",
    paddingLeft: 15,
  },
});
