import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS } from "./theme";

const Cards = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text} </Text>
        <Text style={styles.itemText}>{props.schedule} </Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor:'#FFF',
    padding:15,
    borderRadius:20,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:20,
  },
  itemLeft: {
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
  },
  square: {
    width:24,
    height:24,
    backgroundColor:COLORS.tertiary,
    opacity:0.4,
    borderRadius:5,
    marginRight:15,
  },
  itemText: {
    maxWidth:'80%',
  },
  circular: {
    width:24,
    height:15,
    borderColor:COLORS.tertiary,
    borderWidth:2,
    borderRadius:10,
  },
});

export default Cards;
