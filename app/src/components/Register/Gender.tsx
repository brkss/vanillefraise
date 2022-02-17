import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "../General/Button";

export const RegisterGender: React.FC = () => {
  const [selected, setSelected] = React.useState("MALE");
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => setSelected("MALE")}
        style={[
          styles.choise,
          { backgroundColor: selected == "MALE" ? "#DCB097" : "#F2D5C3" },
        ]}
      >
        <Text style={styles.choisetxt}>MALE</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelected("FEMALE")}
        style={[
          styles.choise,
          { backgroundColor: selected == "FEMALE" ? "#DCB097" : "#F2D5C3" },
        ]}
      >
        <Text style={styles.choisetxt}>FEMALE</Text>
      </Pressable>
      <Button txt={"SAVE"} clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  choise: {
    width: "100%",
    padding: 20,
    backgroundColor: "#F2D5C3",
    marginBottom: 10,
    borderRadius: 13,
    //borderStyle: "dashed",
    //borderColor: "#434343",
    //borderWidth: 0,
  },
  choisetxt: {
    textAlign: "center",
    fontFamily: "helvitica-condesed",
    fontWeight: "bold",
    fontSize: 20,
  },
});
