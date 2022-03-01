import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  title: string;
}

export const Heading: React.FC<Props> = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={{ width: "70%" }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ width: "30%" }}>
        <Ionicons
          size={30}
          style={{ alignSelf: "flex-end" }}
          name={"ios-eye"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 50,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "baseline",
  },
  title: {
    fontSize: 33,
    fontWeight: "bold",
  },
});
