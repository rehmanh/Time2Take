import { View, Platform, ToastAndroid, Alert, StyleSheet, Text, Button, TouchableOpacity } from "react-native";
import { TextInput,GestureHandlerRootView, ScrollView  } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../constants/theme';
import { useEffect, useState } from "react";
import * as SQLite from 'expo-sqlite';


const Form = () => {
    const [db, setDb] = useState(SQLite.openDatabase('example.db'))
    const [date, setDate] = useState(new Date());
    const [medicationDescription, setMedicationDescription] = useState("");
    const [time, setTime] = useState(new Date());
    const [currentMedication, setCurrentMedication] = useState('');

    const wordLimit = 150;
    // Implement logic to limit the number of words
    const handleDescription = (event) => {
      const inputText = event.nativeEvent.text;
      if (inputText) {
        const words = inputText.split(/\s+/); // Split by any whitespace character
        const limitedWords = words.slice(0, wordLimit); // Take the first 150 words
        const limitedText = limitedWords.join(' '); // Join the limited words back into a string
    
        setMedicationDescription(limitedText);
      }
    };
    
    useEffect(() => {
      db.transaction(tx => {
        tx.executeSql('create table if not exists Medications (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT not null, time TEXT not null)')
      })
    }, [db])

    const addMedication = () => {
      if (currentMedication === '' || !currentMedication) {
        notifyMessage('Please enter a valid Medication Name');
        return;
      }

      if (date === null || date === undefined) {
        notifyMessage('Please enter a valid Medication Date');
        return;
      }

      if (time === '' || !time) {
        notifyMessage('Please enter a valid Medication Time');
        return;
      }

      if (medicationDescription === '' || !medicationDescription) {
        notifyMessage('Please enter a valid Medication Description');
        return;
      }

      db.transaction(tx => {
        tx.executeSql('insert into Medications (name, time) values (?, ?)', [currentMedication, date.toLocaleDateString() + ' ' + time.toLocaleTimeString()],
          (txObj, resultSet) => {
            setDate(new Date());
            setTime(new Date());
            setCurrentMedication('');
            setMedicationDescription('');
          },
          (txObj, error) => console.log(error)
        );
      })
    }

    const notifyMessage = (msg) => {
      Platform === 'android' 
        ? ToastAndroid.show(msg, ToastAndroid.SHORT) 
        : Alert.alert(msg);
    }

    const onDateChange = (event, selectedDate) => {
      const currentDate = selectedDate;
      setDate(currentDate);
    }

    const onTimeChange = (event, selectedTime) => {
      const currentTime = selectedTime;
      setTime(currentTime);
    }


    return (
        <GestureHandlerRootView style={styles.bigboy}> 
            <View style={styles.container}>

            
              
                <TextInput style={styles.input} value={currentMedication} onChangeText={setCurrentMedication} placeholder="Medication Name"/>
                <TextInput style={styles.input} placeholder="Medication Description" value={medicationDescription} onChange={handleDescription}/>
                <View style={styles.datetimeContainer}>
                  <DateTimePicker 
                      value={date}
                      mode="date"
                      onChange={onDateChange}
                      display="default"
                      />

                  <DateTimePicker 
                      value={time}
                      mode="time"
                      onChange={onTimeChange}
                      display="default"
                      is24Hour={true}
                      />
                </View> 
                
                
                <TouchableOpacity onPress={addMedication}>
                  <View style={styles.addwrapper}>
                    <Text>Add Medication</Text>
                  </View>
                </TouchableOpacity>
            </View>
        </GestureHandlerRootView>
        
    )
};

const styles = StyleSheet.create({
  bigboy: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
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
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#EBEAED",
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 20,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
   datetimeContainer: {
     flexDirection: 'row',
     alignItems: 'center',
     justifyContent: 'center',
     marginBottom:10,
   },
  addwrapper: {
    height: 60,
    width: 250,
    borderRadius: 20,
    backgroundColor: COLORS.tertiary,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
});

export default Form;