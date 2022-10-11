import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Pressable } from "react-native";

export const PlansTrackingOverview: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Tracking Nutrition Plans</Text>
        <View style={styles.content}>
          <Text style={styles.subtitle}>no selected plans.</Text>
          <Pressable style={styles.btn}>
            <Text style={styles.btnText}>Select Plans</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 30,
  },
  title: {
    fontSize: 25,
    fontFamily: "AvNextBold",
    textAlign: "center",
    color: "#434343",
    marginTop: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 20,
    opacity: 0.7,
    fontFamily: "AvNextBold",
    marginBottom: 15,
  },
  btn: {
    paddingVertical: 17,
    borderRadius: 8,
    paddingHorizontal: 45,
    backgroundColor: "#434343",
  },
  btnText: {
    color: "white",
    fontFamily: "AvNextBold",
    fontSize: 18,
  },
});
