import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  ToastAndroid,
  Alert
} from "react-native";
import React ,{useState}from "react";
import Cards from "../constants/Cards";
import { TextInput,GestureHandlerRootView  } from "react-native-gesture-handler";

const Mainscreen = () => {
  const [tab,setTab] =useState();
  const[items,setItems]=useState([]);


  const notifyMessage = (msg) => {
    Platform === 'android' 
      ? ToastAndroid.show(msg, ToastAndroid.SHORT) 
      : Alert.alert(msg);
  }

  const handleaddnew=()=>{
    Keyboard.dismiss();
    if (tab === '' || !tab) {
      notifyMessage("Please enter a valid Tablet Name");
      return;
    }
    setItems([...items,tab])
    setTab(null)
  }
  const check =(index)=>{
    let itemscopy =[...items];
    itemscopy.splice(index,1);
    setItems(itemscopy);
  }


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <View style={styles.container}>

      <View style={styles.cardWrapper}>
        <Text style={styles.sectionTitle}>Your Tablets</Text>
      </View>

      <View style={styles.items}>

        {
          items.map((item,index)=> {
            return(
            <TouchableOpacity key={index} onPress={()=>check(index)}>
              <Cards  text={item} />
            </TouchableOpacity>)
              
          }
          )
        }

        {/* <Cards text={"Tab 1"} />
        <Cards text={"Tab 2"} /> */}
      </View>
      {/*Typing space */}
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.twrapper}
      >
        <TextInput style={styles.input} placeholder={"Add new tablet"} value={tab} onChangeText={text=>setTab(text)}/>
        <TouchableOpacity onPress={handleaddnew}>
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

export default Mainscreen;
