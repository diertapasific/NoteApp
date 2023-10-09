import { 
  StyleSheet, 
  Text, View, 
  Image, 
  TextInput, 
  Button, 
  TouchableOpacity,
  ScrollView,
  FlatList,
  Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [value, setvalue] = useState('')
  const [listOfNotes, setListOfNotes] = useState([])

  function handleOnChangeText(getInputText){
    setvalue(getInputText)
  }

  function handleOnPressButton(){
    setListOfNotes(currentNotes => [...currentNotes, value])
    setvalue('')
  }

  function handleRemoveItem(getCurrentIndex){
    console.log("item pressed lol")
    let cpyListOfNotes = [...listOfNotes]
    cpyListOfNotes = cpyListOfNotes.filter((_,index) => getCurrentIndex !== index)
    setListOfNotes(cpyListOfNotes)
  }

  console.log(listOfNotes)

  return (
    <View style={styles.container}>

        <View style={styles.header} >
          
          <Text style={styles.titleText}>Note List</Text>

          <View style={styles.inputContainer}>

            <TextInput
              onChangeText={handleOnChangeText}
              style={[styles.textInput]}
              placeholder="Your notes"
              value={value}/>

            <TouchableOpacity onPress={handleOnPressButton} style={[styles.button]}>
              <Text style={styles.btnTxt}>Save</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={styles.listContainer}>
          {/* Scroll View itu render semua list sekaligus */}
          {/* <ScrollView>
            {listOfNotes.map((item, index) => (
              <Text style={styles.listItems} key={'item${index}'}>{item}</Text>
            ))}
          </ScrollView> */}
          <FlatList
          data={listOfNotes}
          renderItem={({ item, index }) => (
            <View style={styles.listItemContainer}>
              <Text style={styles.listItems}>{item}</Text>
              <TouchableOpacity onPress={() => handleRemoveItem(index)}>
                <Ionicons name="trash-outline" size={24} color='#F9D949' style={styles.trashIcon}/>
              </TouchableOpacity>
            </View>
          )}/>

        </View>

    </View>
  );
}

const styles = StyleSheet.create({

  titleText: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 'auto',
    color : '#3C486B'
  },

  container : {
    display: 'flex',
    flex: 1,
    gap: 20,
    fontFamily: 'Arial',
    paddingHorizontal: 50, 
    paddingVertical: 20,
    backgroundColor: '#F0F0F0'
  },

  inputContainer : {
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingBottom2: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#3C486B'
  },

  textInput : {
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#3C486B',
    paddingHorizontal: 10,
    paddingVertical: 5,
    placeholderTextColor: '#3C486B',
    flex: 1
  },

  button : {
    height:30,
    width: 60,
    borderRadius: 15,
    backgroundColor: '#F9D949',
    justifyContent: 'center',
    alignItems: 'center'
  },

  btnTxt : {
    color: 'white',
    fontWeight: 'bold'
  },
  
  notes : {
    textAlign: 'left',
    flex: 1,
    fontWeight: 'bold',
    color: '#3C486B'
  },

  listItems : {
    height: 70,
    backgroundColor: '#3C486B',
    marginBottom: 10,
    padding: 20,
    borderRadius: 15,
    color: 'white',
    flex: 1
  },

  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  trashIcon : {
    marginTop : -10,
    marginLeft: 5
  },

  header : {
    marginTop: '10%'
  }
});
