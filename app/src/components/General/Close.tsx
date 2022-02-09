import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  pressed: () => void;
}

export const Close: React.FC<Props> = ({ pressed }) => {
  return (
    <TouchableOpacity onPress={() => pressed()} style={styles.container}>
      <Ionicons size={40} name={"ios-close-outline"} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 40,
  },
});
