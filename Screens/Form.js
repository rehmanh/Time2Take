import { View, StyleSheet } from "react-native";
import { TextInput,GestureHandlerRootView, ScrollView  } from "react-native-gesture-handler";
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from "react";


const Form = () => {
    const [date, setDate] = useState(new Date());

    return (
        <GestureHandlerRootView style={styles.bigboy}>
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder="Medication Name"/>
                
                <DateTimePicker 
                    style={styles.datetime}
                    value={date}
                    mode='date'
                    display="default" />
                
                <DateTimePicker 
                    style={styles.datetime}
                    value={date}
                    is24Hour={true}
                    mode='time'
                    display="compact" />
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
      position: 'absolute',
      paddingLeft:20,
      paddingRight:20,
      bottom: 25,
      width: '100',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
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
      alignItems: 'center'
    },
    datetime: {
      paddingTop: 10,
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    addwrapper: {
      height: 60,
      width: 60,
      left:17,
      borderRadius: 20,
      backgroundColor: '#FFF',
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C0C0C0',
      borderWidth: 1,
    },
    addtext: {},
  });

export default Form;