import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export const Reminder: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Lunch,</Text>
          <Text style={styles.subtitle}>Remaning.</Text>
        </View>
        <View style={styles.timeContainer}>
          <View style={styles.timeUnit}>
            <Text style={styles.unit}>Hours</Text>
            <Text style={styles.value}>09</Text>
          </View>
          <View style={styles.timeUnit}>
            <Text style={styles.unit}>Minutes</Text>
            <Text style={styles.value}>19</Text>
          </View>
          <View style={styles.timeUnit}>
            <Text style={styles.unit}>Seconds</Text>
            <Text style={styles.value}>00</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0030FF",
    padding: 15,
    paddingBottom: 0,
  },
  titleContainer: {},
  title: {
    fontSize: 53,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 53,
    color: "white",
  },
  timeContainer: {
    marginTop: 40,
  },
  timeUnit: {
    marginBottom: 20,
  },
  unit: {
    fontSize: 34,
    fontWeight: "bold",
    color: "white",
  },
  value: {
    fontSize: 69,
    fontWeight: "bold",
    color: "white",
  },
});
