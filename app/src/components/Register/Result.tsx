import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button } from "../General/Button";

export const BMIResult: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>YOUR BASAL METABOLIC INDEX </Text>
      <View style={styles.result}>
        <View style={[styles.item, { width: "50%", alignItems: "flex-end" }]}>
          <Text style={styles.number}>1'340</Text>
        </View>
        <View style={styles.numberInfo}>
          <Text style={styles.unit}>Calories</Text>
          <Text style={styles.timing}>per day</Text>
        </View>
      </View>
      <View style={styles.info}>
        <Ionicons
          size={30}
          style={{ opacity: 0.7 }}
          name={"ios-flag-outline"}
        />
        <Text style={styles.infoTxt}>
          your body may need more {"\n"}
          during physical activities{" "}
        </Text>
      </View>
      <Button txt={"Continue"} clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
  },
  heading: {
    fontSize: 30,
    fontFamily: "helvitica-condesed",
    fontWeight: "bold",
    textAlign: "center",
  },
  result: {
    flexDirection: "row",
  },
  item: {},
  number: {
    fontWeight: "bold",
    fontSize: 60,
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
  unit: {
    fontSize: 31,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
  timing: {
    lineHeight: 23,
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
  numberInfo: {
    top: 30,
    left: 5,
  },
  info: {
    alignItems: "center",
  },
  infoTxt: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 23,
    fontFamily: "helvitica-condesed",
    color: "#434343",
  },
});
