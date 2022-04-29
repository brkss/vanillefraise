import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  pressed: () => void;
  isRegister?: boolean;
}

export const Close: React.FC<Props> = ({ pressed, isRegister }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        pressed();
      }}
      style={[
        styles.container,
        {
          height: isRegister ? 35 : 45,
          width: isRegister ? 35 : 45,
          top: isRegister ? 25 : 10,
          backgroundColor: isRegister ? "black" : "#f0f0f0",
        },
      ]}
    >
      <Ionicons
        size={isRegister ? 30 : 40}
        name={"ios-close-outline"}
        color={isRegister ? "white" : "black"}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 25,
    right: 10,
    height: 45,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 40,
    zIndex: 9999,
  },
});
