import React from 'react';
import { View, Text, SafeAreaView, TextInput, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons
import { COLORS } from '../constants/theme';
import homescreenimg from '../assets/imgs/notify.jpg'; // Replace with the actual image path
import { useNavigation } from '@react-navigation/core';


const Homescreen = () => {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Mainscreen'); 
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Heading text on the top center */}
      <View style={styles.header}>
        <Text style={styles.headingText}>Forget to take you Medicines on time?</Text>
      </View>

      {/* Image below the heading */}
      <View style={styles.imageContainer}>
        <Image source={homescreenimg} style={styles.image} resizeMode="cover" />
      </View>

      <View style={styles.text2}>
        <Text style={styles.Text2}>Not Anymore....</Text>
      </View>
      <View style={styles.text3}>
        <Text style={styles.Text3}>Get Notified and Keep Track!</Text>
      </View>
      {/* Next button */}
      <TouchableOpacity style={styles.NextButton}
      onPress={handleNext}
      >
        <Text style={styles.NextButtonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    paddingTop:140,
    padding: 50,
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
  },
  text2: {
    alignItems: 'center',
    paddingBottom:0,
    marginTop: 10,
  },
  text3: {
    alignItems: 'center',
    paddingBottom:80,
    
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Text2: {
    fontSize: 18,
    fontWeight:'700',
  },
  Text3: {
    fontSize: 18,
    fontWeight:'700',
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
  icon: {
    marginRight: 10,
  },
  NextButton: {
    backgroundColor: COLORS.tertiary,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 20,
  },
  NextButtonText: {
    color: COLORS.lightWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Homescreen;
