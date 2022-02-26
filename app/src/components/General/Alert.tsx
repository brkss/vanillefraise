import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  txt: string;
  type: "error" | "success";
  onClick: () => void;
}

export const Alert: React.FC<Props> = ({ txt, type, onClick }) => {
  return (
    <Pressable onPress={() => onClick()} style={styles.container}>
      <Text style={styles.txt}>{txt}</Text>
      <View style={{ width: "20%" }}>
        <Ionicons size={20} style={{ alignSelf: "flex-end" }} name={"close"} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#C5F8CC",
    borderRadius: 14,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  txt: {
    //textAlign: "center",
    color: "black",
    fontWeight: "bold",
    width: "80%",
  },
});
