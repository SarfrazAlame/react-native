import { Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { data } from "@/data/todos"
import { SafeAreaView } from "react-native-safe-area-context";

interface Todos {
  id: number,
  title?: string,
  completed?: boolean,
  userId?: number
}

export default function Index() {
  const [todos, setTodos] = useState<Todos[]>(data.sort((a, b) => a.id - b.id))
  const [text, setText] = useState('')

  const addTodo = () => {
    if (text.trim()) {
      const newId = todos.length > 0 ? todos[todos.length].id : 1
      setTodos([{ id: newId, title: text, completed: false, userId: 213 }])
      setText("")
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map((item: any) => item.id === id ? { ...todos, completed: !item.completed } : item))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((item) => item.id !== id))
  }
  return (
     <SafeAreaView style={styles.container}>
      <View style={styles.inputCotainer}>
        <TextInput/>
        <Pressable>
          <Text>

          </Text>
        </Pressable>
      </View>

     </SafeAreaView>
  );
}
