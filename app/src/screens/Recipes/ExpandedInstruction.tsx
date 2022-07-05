import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const ExpandedInstruction: React.FC<any> = ({ route }) => {
  const { index, txt, title } = route.params;

  console.log("txt : ", txt);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.logo}>🍓</Text>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.box}>
          <Text style={styles.index}>{index}</Text>
          <Text style={styles.txt}>{txt}</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: "bold",
    //
  },
  logo: {
    textAlign: "center",
    fontSize: 40,
    //display: "none",
  },
  box: {
    marginTop: -70,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  index: {
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#434343",
  },
  txt: {
    color: "#434343",
    fontSize: 20,
    fontWeight: "bold",
  },
});
