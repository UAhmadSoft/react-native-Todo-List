import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import ListItem from './components/ListItem';
import NewItemForm from './components/NewItemForm';
import uuid from 'react-native-uuid';

export default function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (inputTxt) => {
    // setTodos([]);
    setTodos((currentTodos) => [
      ...currentTodos,
      { todo: inputTxt, id: uuid.v4() },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) =>
      currentTodos.filter((el) => el.id !== id)
    );
  };

  const updateTodo = (id, updatedTxt) => {
    setTodos((currentTodos) =>
      currentTodos.map((el) =>
        el.id === id ? { ...el, todo: updatedTxt } : el
      )
    );
  };

  return (
    <View style={styles.container}>
      <NewItemForm addNewTodo={addNewTodo} />
      {/* <ScrollView>
        <View style={styles.todosList}>
          {todos.map((todo) => (
            <Text style={styles.todo} key={uuid.v4()}>
              {todo}
            </Text>
          ))}
        </View>
      </ScrollView> */}
      <FlatList
        data={todos}
        contentContainerStyle={styles.todosList}
        keyExtractor={(item, idx) => `${item}${idx}`}
        renderItem={(el) => (
          <ListItem
            el={el}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 20,
  },

  todosList: {
    marginVertical: 20,
    alignItems: 'center',
  },
});
