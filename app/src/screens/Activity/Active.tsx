import React from "react";
import { View, StyleSheet, Text, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";
import { ActiveAction, ActiveReminder } from "../../components";

export const Active: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.reminderContainer}>
          <ActiveReminder />
        </View>
        <View style={styles.timeContainer}>
          <Text style={styles.time}>00:02:45</Text>
        </View>
        <View style={styles.actionsContainer}>
          <Text style={styles.support}>You're doing great</Text>
          <ActiveAction />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#1E1E1E",
  },
  timeContainer: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
  },
  time: {
    fontWeight: "bold",
    fontSize: 68,
    color: "white",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
  reminderContainer: {
    flex: 0.33,
    justifyContent: "center",
    alignItems: "center",
  },
  reminder: {
    width: "100%",
    height: 70,
    backgroundColor: "white",
    borderRadius: 16,
    marginBottom: 10,
    opacity: 0.6,
  },
  actionsContainer: {
    flex: 0.33,
    justifyContent: "space-evenly",
  },
  support: {
    fontSize: 20,
    color: "white",
    opacity: 0.66,
    fontFamily: "helvitica-condesed",
    textAlign: "center",
  },
});
