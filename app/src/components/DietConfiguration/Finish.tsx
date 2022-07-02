import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  finish: () => void;
  back: () => void;
}

export const FinishDietConfig: React.FC<Props> = ({ finish, back }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EVERYTHING IS SET !</Text>
      <Pressable style={styles.btn} onPress={finish}>
        <Text style={styles.txtBtn}>SAVE</Text>
      </Pressable>
      <Pressable style={styles.gobackbtn} onPress={() => back()}>
        <Text style={styles.gbText}>GO BACK</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  btn: {
    height: 120,
    width: 120,
    backgroundColor: "#323232",
    borderRadius: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  txtBtn: {
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  gobackbtn: {
    padding: 12,
    paddingHorizontal: 40,
    borderRadius: 50,
    backgroundColor: "#FEE8BF",
    borderWidth: 1,
    borderColor: "#979797",
    //
  },
  gbText: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
