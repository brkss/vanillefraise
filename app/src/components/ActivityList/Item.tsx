import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Moment from "moment";
import { colors } from "../../utils/colors";

interface Props {
  title: string;
  icon: string;
  date: Date;
}

export const Item: React.FC<Props> = ({ icon, title, date }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>{icon}</Text>
      <Text style={styles.title}>{title}</Text>
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
    marginBottom: 10,
  },
  date: {
    fontSize: 12,
    opacity: 0.8,
  },
});
