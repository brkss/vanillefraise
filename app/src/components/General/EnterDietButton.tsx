import React from "react";
import { Platform, Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  pressed: () => void;
}

export const EnterDietButton: React.FC<Props> = ({ pressed }) => {
  return (
    <Pressable style={styles.container} onPress={() => pressed()}>
      <View style={styles.behindCircle} />
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
    height: 75,
    width: 75,
    paddingTop: 5,
  },
  circle: {
    backgroundColor: "#FFB9B9",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: Platform.OS === "android" ? -1 : 0
  },
  icon: {
    fontSize: 30,
  },
  txt: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "bold",
    //
  },
  behindCircle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "#FFDFDF",
    position: "absolute",
    top: 0,
  },
});
