import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  icon: string;
  title: string;
  percent: number;
}

export const MoodStatsItem: React.FC<Props> = ({ icon, title, percent }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.percent}>{percent}%</Text>
      <View style={[styles.bar, { height: percent }]} />
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    minHeight: 200,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  percent: {
    fontSize: 11,
    fontWeight: "bold",
    marginBottom: 6,
  },
  icon: {
    fontSize: 20,
    marginBottom: 3,
  },
  title: {
    fontWeight: "bold",
    fontSize: 10,
  },
  bar: {
    height: 100,
    backgroundColor: "#ACD4A7",
    width: 15,
    borderRadius: 200,
    marginBottom: 10,
  },
});
