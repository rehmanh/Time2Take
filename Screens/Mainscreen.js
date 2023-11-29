import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ToastAndroid,
  Alert,
  FlatList
} from "react-native";
import React ,{useEffect, useState}from "react";
import Cards from "../constants/Cards";
import { TextInput,GestureHandlerRootView, ScrollView  } from "react-native-gesture-handler";
import { COLORS } from '../constants/theme';
import { useNavigation } from '@react-navigation/core';
import * as SQLite from 'expo-sqlite';


const Mainscreen = () => {
  const db = SQLite.openDatabase('example.db');
  const [tab,setTab] =useState();
  const[items,setItems]=useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('create table if not exists Medications (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT not null, time TEXT not null)')
    })

    db.transaction(tx => {
      tx.executeSql('select * from Medications', null,
        (txObj, resultSet) => setItems(resultSet.rows._array),
        (txObj, error) => console.log(error)
      );
    })
  }, [db])

  const showMedications = () => {
    return items.map((item,index)=> {
      return(
      <TouchableOpacity key={item.id} onPress={() => deleteMedication(item.id)} >
        <Cards text={item.name} schedule={item.time}/>
      </TouchableOpacity>)
      });
  }

  const deleteMedication = (id) => {
    db.transaction(tx => {
      tx.executeSql('delete from Medications where id = ?', [id], 
        (txObj, resultSet) => {
          if (resultSet.rowsAffected > 0) {
            let existingMedication = [...items].filter(med => med.id != id);
            setItems(existingMedication);
          }
        },
        (txObj, error) => console.log(error)
      );
    })
  }

  const goToForm = () => {
    navigation.navigate('Form')
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>

      <View style={styles.cardWrapper}>
        <Text style={styles.sectionTitle}>Your Tablets</Text>
      </View>
    
      <ScrollView style={styles.items}>
        { showMedications() }
      </ScrollView>

      {/*Typing space */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.twrapper}
      >


        {/* <TextInput style={styles.input} placeholder={"Add new tablet"} value={tab} onChangeText={text=>setTab(text)}/> */}
     

        {/* <TextInput style={styles.input} placeholder={"Add new tablet"} value={tab} onChangeText={text=>setTab(text)}/> */}


        <TouchableOpacity onPress={goToForm}>

          <View style={styles.addwrapper}>
            <Text style={styles.addtext}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#EBEAED",
  },
  cardWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: "bold",
  },
  items: {
    marginTop: 30,
  },
  twrapper: {
    paddingLeft:20,
    paddingRight:20,
    bottom: 25,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addwrapper: {
    height: 60,
    width: 300,
    left:27,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addtext: {
    fontSize:35
  },
});

export default Mainscreen;
