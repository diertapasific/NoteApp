import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';

export default function App() {

  const [value, setvalue] = useState('')
  const [listOfNotes, setListOfNotes] = useState([])

  function handleOnChangeText(getInputText){
    setvalue(getInputText)
  }

  function handleOnPressButton(){
    console.log(value)
    setListOfNotes(currentNotes => [...currentNotes, value])
  }

  console.log(listOfNotes)

  return (
    <View style={styles.container}>
        <Text style={styles.titleText}>Note List</Text>
          <View style={styles.inputContainer}>
            <TextInput onChangeText={handleOnChangeText} style={[styles.textInput]} placeholder='Your notes'/>
            <TouchableOpacity onPress={handleOnPressButton} style={[styles.button]}>
              <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.notesContainer}>
            <Text style={styles.notes}>Your Notes</Text>
          </View>
          <View style={styles.listContainer}>
            {listOfNotes.map((item, index) => (
              <Text key={'item${index}'}>{item}</Text>
              ))}
          </View>
    </View>
  );
}

const styles = StyleSheet.create({

  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 'auto'
  },

  container : {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    gap: 20,
    fontFamily: 'Arial',
    paddingHorizontal: 50, // Add horizontal margin
    paddingVertical: 20,
  },

  inputContainer : {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom2: 30,
    borderBottomWidth: 1
  },

  textInput : {
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#808080',
    paddingHorizontal: 10,
    paddingVertical: 5,
    placeholderTextColor: '#808080',
    flex: 1
  },

  button : {
    height:30,
    width: 60,
    borderRadius: 15,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTxt : {
    color: 'white',
    fontWeight: 'bold'
  },

  notesContainer : {
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },

  notes : {
    textAlign: 'left',
    flex: 1,
    fontWeight: 'bold'
  }

});
