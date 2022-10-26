import React from "react";
import { View, SafeAreaView, Text, StyleSheet } from "react-native";
import { Button } from "../../components";

export const BatchCookingConfig: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.title}>Batch Cooking 🧑‍🍳</Text>
            <Text style={styles.subtitle}>
              Prepare meals for the next 7-30 days{" "}
            </Text>
          </View>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.subtitle}>Cook It Once</Text>
            <Text style={styles.subtitle}>Save Time ⏰ and Money 💸</Text>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            padding: 10,
            justifyContent: "flex-end",
          }}
        >
          <Text style={styles.info}>
            this feature is currently unavailable{" "}
          </Text>
          <Button clicked={() => {}} txt={"Start"} />
        </View>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  content: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "#434343",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    color: "#666666",
    //opacity: 0.6,
    lineHeight: 26,
    marginTop: 6,
  },
  info: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 15,
    color: "#666666",
    //opacity: 0.6,
  },
});
