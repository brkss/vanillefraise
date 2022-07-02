import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  icon: string;
  subtitle: string;
}

export const InfoItem: React.FC<Props> = ({ subtitle, icon, title }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <View style={styles.txtContainer}>
        <Text style={styles.title}>{title} </Text>
        <Text style={styles.subtitle}>{subtitle} </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 20,
    borderRadius: 7,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D0F0B4",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  txtContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
  },
  subtitle: {
    //
  },
  icon: {
    fontSize: 19,
  },
});
