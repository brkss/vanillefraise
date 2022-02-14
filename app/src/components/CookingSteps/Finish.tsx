import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts } from "expo-font";
import { Button } from "../";
import Ionicons from "react-native-vector-icons/Ionicons";

export const FinishStep: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>Did you make it ?</Text>
      <View style={styles.instagram}>
        <TouchableOpacity style={styles.takepic}>
          <Ionicons name={"ios-camera"} size={24} />
          <Text style={styles.takepicTxt}>Instagram {"\n"} Story</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button txt={"Yess 🎉"} clicked={() => {}} />
        <Button
          bg={"#F7DB91"}
          color={"#434343"}
          txt={"Restart"}
          clicked={() => {}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hint: {
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
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
    backgroundColor: "#F7DB91",
    justifyContent: "center",
    alignItems: "center",
  },
  takepicTxt: {
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
  actions: {},
});
