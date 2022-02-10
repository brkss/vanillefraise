import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { ReminderForm } from "../../components";

export const CreateReminder: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Create</Text>
          <Text style={styles.subtitle}>Reminder.</Text>
        </View>
        <ReminderForm />
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
  title: {
    fontSize: 48,
    fontWeight: "bold",
    color: "white",
  },
  subtitle: {
    fontSize: 48,
    color: "white",
  },
});
