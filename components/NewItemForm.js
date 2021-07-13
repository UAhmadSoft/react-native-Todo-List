import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import {
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Icon } from 'react-native-elements';

const NewItemForm = ({ addNewTodo }) => {
  const [inputTxt, setInputTxt] = useState('');

  const handleTextChange = (value) => {
    setInputTxt(value);
  };

  const clearTxt = () => {
    setInputTxt('');
  };

  const handleAdd = () => {
    if (!inputTxt) {
      ToastAndroid.show(`Todo Can't be empty`, ToastAndroid.SHORT);
      return;
    }

    addNewTodo(inputTxt);
    clearTxt();
  };

  return (
    <View style={styles.addSection}>
      <TextInput
        placeholder='Todo'
        style={styles.addInput}
        value={inputTxt}
        onChangeText={handleTextChange}
      />
      <TouchableOpacity
        title='ADD'
        style={{
          borderRadius: 25,
          width: '30%',
        }}
        activeOpacity={0.7}
        onPress={handleAdd}
      >
        <View style={styles.addBtnText}>
          <Text style={styles.btnTxt}>ADD</Text>
          <Icon name='plus' type='feather' color='#fff' />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  addSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  addInput: {
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontSize: 18,
    width: '60%',
  },
  addBtnText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00BCD4',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  btnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default NewItemForm;
