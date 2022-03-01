import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Heading } from "../../components";
import { MoodStats } from "../../components";

export const Overview: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Heading title={"Overview"} />
        <ScrollView bounces={false}>
          <Text style={styles.subtitle}>About your mood</Text>
          <View style={{ marginBottom: 30 }}>
            <MoodStats />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
