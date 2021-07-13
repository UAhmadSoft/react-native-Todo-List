import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native';
import { Pressable } from 'react-native';
import { View } from 'react-native';
import { Modal } from 'react-native';
import { Icon } from 'react-native-elements';

const EditTodoModal = ({
  modalVisible,
  toggleModalVisible,
  onSuccess,
  onCancel,
  todo,
}) => {
  const [todoTxt, setTodo] = useState(todo);

  const handleChange = (value) => {
    setTodo(value);
  };

  const handleUpdate = () => {
    onSuccess(todoTxt);
  };

  return (
    <Modal
      animationType='fade'
      transparent={true}
      visible={modalVisible}
      onRequestClose={toggleModalVisible}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Update Todo</Text>
          <View style={styles.editTodoForm}>
            <TextInput
              placeholder='Update Todo'
              value={todoTxt}
              onChangeText={handleChange}
              style={styles.todoTxt}
            />
          </View>
          <View style={styles.actions}>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleUpdate}
            >
              <Icon
                type='material'
                name='check-circle'
                size={30}
                style={{
                  opacity: 0.6,
                }}
                color='#eb3d30'
              />
              <Text style={styles.textStyle}>Update</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onCancel}
            >
              <Icon
                type='material'
                name='cancel'
                size={30}
                color='#4cb2f5'
              />
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
  },
  editTodoForm: {
    padding: 20,
  },
  todoTxt: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '60%',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 15,
    // elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
  },
  buttonOpen: {
    backgroundColor: '#fff',
    color: '#000',
  },
  buttonClose: {
    backgroundColor: '#fff',
    color: '#000',
  },
  textStyle: {
    color: '#000',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default EditTodoModal;
