import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

interface Props {
  pass: () => void;
}

export const RegisterOutro: React.FC<Props> = ({ pass }) => {
  return (
    <View style={styles.container}>
		<View>
	  <Text style={styles.heading}>✨</Text>
      <Text style={styles.info}>
        Thank You For Eating Healthy!
      </Text>
	  </View>
      <Button txt={"SAVE"} clicked={() => pass()} />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 70,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "#434343",
	textAlign: 'center',
	marginBottom: 20,
  },
  info: {
    fontWeight: "bold",
    fontSize: 21,
    fontFamily: "AvNextBold",
    textAlign: "center",
    color: "#434343",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});
