import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Moment from "moment";
import { colors } from "../../utils/colors";

interface Props {
  title: string;
  calories: number;
  icon: string;
  date: Date;
}

export const Item: React.FC<Props> = ({ icon, title, date, calories }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.calories}>🔥 {calories} calorie</Text>
      <Text style={styles.date}>{Moment(date).format("DD/MM/YYYY hh:mm")}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: colors.c3,
    borderRadius: 14,
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    opacity: 0.8,
  },
  calories: {
    fontSize: 15,
    opacity: 0.8,
  },
  date: {
    marginTop: 10,
    fontSize: 12,
    opacity: 0.8,
  },
});
