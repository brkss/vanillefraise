import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DietSettingsTopBar } from "../../components";

export const DietSettings: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Diet{"\n"}Settings</Text>
        <DietSettingsTopBar />
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
    fontSize: 27,
    fontWeight: "bold",
  },
});
