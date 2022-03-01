import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    marginBottom: 10,
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
});
