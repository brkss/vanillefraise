import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  quantity: number;
  unit: string;
  description: string;
}

export const PlanNutritientItem: React.FC<Props> = ({title, quantity, description, unit}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.line} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.quantity}>~{quantity}{unit} per day</Text>
        </View>
      </View>
      <Text style={styles.description}>
        {description}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
  },
  line: {
    height: "100%",
    backgroundColor: "#434343",
    borderRadius: 100,
    width: 7,
    marginRight: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 15,
    marginBottom: 3,
  },
  quantity: {
    fontFamily: "AvNextBold",
    fontSize: 15,
  },
  description: {
    fontSize: 14,
    marginTop: 10,
  },
});
