import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Button } from "../General/Button";
import { colors } from "../../utils";

interface Props {
  finish: () => void;
  restart: () => void;
}

export const FinishStep: React.FC<Props> = ({ finish, restart }) => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text style={styles.hint}>Did you make it ?</Text>
      </View>
      {/*
      <View style={styles.instagram}>
        <TouchableOpacity style={styles.takepic}>
          <Ionicons name={"ios-camera"} size={24} />
          <Text style={styles.takepicTxt}>Instagram {"\n"} Story</Text>
        </TouchableOpacity>
      </View>
      */}
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button txt={"Yess 🎉"} clicked={() => finish()} />
        <View style={{ height: 20 }} />
        <Button
          bg={"#FFC9C9"}
          color={"#434343"}
          txt={"Restart"}
          clicked={() => restart()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  hint: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    //fontFamily: "helvitica-condesed",
    fontSize: 25,
    textAlign: "center",
  },
  instagram: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  takepic: {
    height: 160,
    width: 160,
    borderRadius: 160,
    backgroundColor: colors.c3,
    justifyContent: "center",
    alignItems: "center",
  },
  takepicTxt: {
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
  actions: {},
});
