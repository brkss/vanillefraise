import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Item } from "./Item";

export const ReminderSlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slide}>
        <ScrollView horizontal={true}>
          <Item name={"Meals"} active />
          <Item name={"Insulin"} />
        </ScrollView>
      </View>
      <View style={styles.action}>
        <Ionicons name={"ios-add-circle"} size={42} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 20,
  },
  slide: {
    width: "80%",
    justifyContent: "center",
  },
  action: {
    width: "20%",
    alignItems: "flex-end",
  },
  icon: {
    color: "white",
  },
});
