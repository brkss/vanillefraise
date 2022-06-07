import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
}

export const EnterDietButton: React.FC<Props> = ({ pressed }) => {
  return (
    <Pressable style={styles.container} onPress={() => pressed()}>
      <View style={styles.circle}>
        <Text style={styles.icon}>🍦</Text>
      </View>
      <Text style={styles.txt}>Diet</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    backgroundColor: "#E7E7E7",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  icon: {
    fontSize: 30,
  },
  txt: {
    marginTop: 3,
    fontSize: 13,
    fontWeight: "bold",
    //
  },
});
