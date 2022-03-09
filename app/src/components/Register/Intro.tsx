import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

interface Props {
  pass: () => void;
  login: () => void;
}

export const RegisterIntro: React.FC<Props> = ({ pass, login }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.heading}>Hello.</Text>
        <Text style={styles.info}>
          Brace yourself and let me take you on trip to find your balence,
          eating and keeping health mentally and physically
        </Text>
      </View>
      <View style={{ width: "100%" }}>
        <Button txt={"Register"} clicked={() => pass()} />
        <View style={{ marginTop: 10, width: "100%" }}>
          <Button
            bg={"#D6CCC2"}
            color={"#434343"}
            txt={"Login"}
            clicked={() => login()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 54,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#434343",
    textAlign: "left",
  },
  info: {
    marginTop: 10,
    //fontWeight: "bold",
    fontSize: 21,
    //fontFamily: "helvitica-condesed",
    textAlign: "left",
    color: "#434343",
    opacity: 0.8,
  },
  container: {
    flex: 1,
    //alignItems: "center",
    justifyContent: "space-evenly",
  },
});
