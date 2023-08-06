import React,{useEffect,useState} from 'react'
import headerImage from '../assets/imgs/Login.jpg';
import { COLORS, FONT, SIZES, SHADOWS } from "../constants/theme";
import { Text, SafeAreaView, TextInput, Image, StyleSheet, TouchableOpacity,View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {auth,getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth';
import { FIREBASE_AUTH } from '../firebase';
import { useNavigation } from '@react-navigation/core';


const Login = () => {
const [email,setEmail]= useState('');
const [password,setPassword]= useState('');
const auth = FIREBASE_AUTH;
const navigation = useNavigation()

useEffect(()=>{
  const unsubscribe=auth.onAuthStateChanged(user=>{
    if(user){
    navigation.navigate("Welcome!")
  }
  })
  return unsubscribe;
},[])


const Register = ()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      const user =userCredentials.user;
      console.log(user.email)
    })
    .catch(error=>alert('Registration Failed,'))
}
const signIn = ()=>{
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredentials) => {
      const user =userCredentials.user;
      console.log(user.email)
    })
    .catch(error=>alert('Sign In Failed , Register First!'))
}
// const signIn = async()=>{
//     setLoading(true);
//     try {
//       const response =await signInWithEmailAndPassword(auth,email,password);
//       console.log(response);
//       alert('Check your Email !')
//     } catch (error) {
//       console.log(error);
//       alert('Sign In Failed')
//     } finally{
//       setLoading(false);
//     }
// }
// const Register = async()=>{
//   setLoading(true);
//   try {
//     const response =await createUserWithEmailAndPassword(auth,email,password);
//     console.log(response);
//     alert('Check your Email !')
//   } catch (error) {
//     console.log(error);
//     alert('Registeration Failed')
//   } finally{
//     setLoading(false);
//   }
// }

    return (
      <SafeAreaView style={styles.container}>
        {/* Heading text on the top center */}
        <View style={styles.header}>
          <Text style={styles.headingText}>Time2Take</Text>
        </View>
  
        {/* Image below the heading */}
        <View style={styles.imageContainer}>
          <Image source={headerImage} style={styles.image} resizeMode="cover" />
        </View>
  
        {/* Text entry field for email */}
        <View style={styles.inputContainer}>
          <Icon name="envelope" size={18} color={COLORS.darkGray} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            value={email}
            onChangeText={text=>setEmail(text) }
            placeholderTextColor={COLORS.gray}
            keyboardType="email-address"
          />
        </View>
  
        {/* Text entry field for password */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color={COLORS.darkGray} style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            value={password}
            onChangeText={text=> setPassword(text)}
            placeholderTextColor={COLORS.gray}
            secureTextEntry
          />
        </View>
  
        {/* Sign In button */}
        <View style={styles.signInButtonView}>
        <TouchableOpacity style={styles.signInButton}
         onPress={signIn}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>
        </View>
        {/* Register button */}
        <View style={styles.RegisterView}>
        <TouchableOpacity style={styles.RegisterButton} 
        onPress={Register}>
          <Text style={styles.RegisterButtonText}>Register</Text>
        </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: COLORS.lightWhite,
      padding: 50,
    },
    header: {
      alignItems: 'center',
      marginTop: 30,
    },
    headingText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    imageContainer: {
      alignItems: 'center',
      marginVertical: 30,
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: COLORS.gray,
      marginBottom: 20,
    },
    input: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 10,
      color: COLORS.black,
    },
    icon: {
      marginRight: 10,
    },
    signInButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 20,
    },
    RegisterButton: {
      backgroundColor: COLORS.primary,
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 20,
    },
    signInButtonText: {
      color: COLORS.lightWhite,
      fontSize: 18,
      fontWeight: 'bold',
    },
    signInButtonView: {
      padding:5,
    },
    RegisterView: {
      padding:5,
    },
    RegisterButtonText: {
      color: COLORS.lightWhite,
      fontSize: 18,
      fontWeight: 'bold',
    },
  });
  
  export default Login;