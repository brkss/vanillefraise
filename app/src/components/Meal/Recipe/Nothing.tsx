import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const NoMealFound: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>😅 0 Selected Meal</Text>
	  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    //backgroundColor: "#e6e6e6",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontWeight: "bold",
    color: '#424242',
	fontFamily: "AvNextBold"
  },
});
