import React from "react";
import { View, Text, StyleSheet } from "react-native";
import dayjs from "dayjs";
import { colors } from "../../../utils/colors";

interface Props {
  name: string;
  icon: string;
  calories: number;
  date: Date;
}

export const Record: React.FC<Props> = ({ icon, calories, date, name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.txt}>{name}</Text>
      <Text style={styles.calories}>{calories} Cal</Text>
      <Text style={styles.date}>{dayjs(date).format("DD/MM/YYYY hh:mm")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.c3,
    marginRight: 10,
    //alignItems: "center",
    borderRadius: 12,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#434343",
    marginTop: 8,
    textAlign: "left",
  },
  icon: {
    //textAlign: "center",
    fontSize: 40,
  },
  date: {
    fontSize: 10,
    marginTop: 6,
  },
  calories: {
    fontSize: 12,
    color: "#434343",
    fontWeight: "bold",
    textAlign: "left",
  },
});
