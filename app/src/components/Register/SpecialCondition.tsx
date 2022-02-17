import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../General/Button";

const conditions = [
  "Type 1 Diabetes",
  "Thyroid",
  "Allergies",
  "Celiac Diseas",
  "Other",
];

export const RegisterSpecialCondition: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Do you have any special conditions that require specific diets ?
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {conditions.map((c, key) => (
          <View key={key} style={styles.choise}>
            <Text style={styles.choiseText}>{c}</Text>
          </View>
        ))}
      </View>
      <Button txt={"Continue"} clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    textAlign: "center",
    color: "#434343",
  },
  choise: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: "#F0DED3",
    marginBottom: 22,
  },
  choiseText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#5A5A5A",
    marginBottom: 5,
  },
});
