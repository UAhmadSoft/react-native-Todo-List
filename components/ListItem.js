import React, { useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import uuid from 'react-native-uuid';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import EditTodoModal from './EditTodoModal';

const ListItem = ({ el, deleteTodo, updateTodo }) => {
  const [isDelModalOpen, setIsDelModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const toggleEditModalVisible = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleModalVisible = () => {
    setIsDelModalOpen(!isDelModalOpen);
  };

  const handleDelete = () => {
    deleteTodo(el.item.id);
    toggleModalVisible();
  };

  const handleEdit = (updatedTodo) => {
    updateTodo(el.item.id, updatedTodo);
    toggleEditModalVisible();
  };

  return (
    <View style={styles.ListItem}>
      <Text style={styles.todo} key={uuid.v4()}>
        {el.item.todo}
      </Text>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.deleteBtn}
        onPress={toggleModalVisible}
      >
        <Icon name='trash-2' type='feather' color='#fff' />
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={1}
        style={styles.editBtn}
        onPress={toggleEditModalVisible}
      >
        <Icon name='edit' type='feather' color='#fff' />
      </TouchableOpacity>

      <ConfirmDeleteModal
        onSuccess={handleDelete}
        onCancel={toggleModalVisible}
        toggleModalVisible={toggleModalVisible}
        modalVisible={isDelModalOpen}
      />
      <EditTodoModal
        onSuccess={handleEdit}
        onCancel={toggleEditModalVisible}
        toggleModalVisible={toggleEditModalVisible}
        modalVisible={isEditModalOpen}
        todo={el.item.todo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ListItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // width: '100%',
  },
  deleteBtn: {
    backgroundColor: '#eb3d30',
    padding: 8,
    opacity: 0.6,
    borderRadius: 10,
    marginRight: 15,
  },
  editBtn: {
    backgroundColor: '#03a2ec',
    padding: 8,
    opacity: 0.6,
    borderRadius: 10,
  },
  todo: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
    borderColor: '#ccc',
    borderWidth: 2,
    paddingVertical: 10,
    // paddingHorizontal: 40,
    width: '57%',
    marginHorizontal: 25,
    marginVertical: 5,
    borderRadius: 10,
    flexGrow: 1,
  },
});

export default ListItem;
