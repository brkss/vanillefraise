import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  name: string,
  amount: string;
  description: string;
  index: number;
}

const formIndex = (index: number) => {
  if(index < 10) return `0${index}`
  return index.toString()
}

export const PlanTrackedElement: React.FC<Props> = ({index, description, amount ,name}) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.index}>
          <Text style={styles.indexText}>{formIndex(index)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.infoTitle}>{name} — {amount}</Text>
          <Text>
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
  },
  index: {
    marginRight: 10,
    //width: "20%",
  },
  indexText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  info: {
    //width: "80%",
  },
  infoTitle: {
    fontWeight: "bold",
    fontSize: 14,
  },
});
