import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <GestureDetector>
        <View>
          <Text style={styles.number}>#1</Text>
          <Text style={styles.txt}>
            Spray a skillet with cooking spray and heat over medium-high heat.
            Quickly brown pork chops in the skillet, seasoning with garlic salt,
            5 to 7 minutes total. Transfer to a slow cooker and pour French
            onion soup on top.
          </Text>
        </View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: "#C8B275",
    borderWidth: 1,
    backgroundColor: "#FCE3A0",
    borderRadius: 27,
  },
  number: {
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "helvitica-condesed",
    fontSize: 18,
    fontWeight: "bold",
  },
  txt: {
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    fontSize: 17,
  },
});
