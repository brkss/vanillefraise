import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  ree: number;
  tdee: number;
}

export const MacrosValues: React.FC<Props> = ({ ree, tdee }) => {
  //const [reeVal, setReeVal] = React.useState(ree);
  //const [tdeeVal, setTdeeVal] = React.useState(tdee);

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.label}>REE</Text>
          <Text style={styles.sublabel}>resting energy expenditure </Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{ree}</Text>
            <Text style={styles.unit}>Cal</Text>
          </View>
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>TDEE</Text>
          <Text style={styles.sublabel}>total daily energy expenditure</Text>
          <View style={styles.valueContainer}>
            <Text style={styles.value}>{tdee}</Text>
            <Text style={styles.unit}>Cal</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 30,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
  },
  label: {
    fontSize: 17,
    fontWeight: "bold",
  },
  sublabel: {
    fontSize: 11,
    opacity: 0.8,
  },
  valueContainer: {
    //
    flexDirection: "row",
    alignItems: "baseline",
  },
  value: {
    fontSize: 38,
    fontWeight: "bold",
  },
  unit: {
    fontWeight: "bold",
    opacity: 0.8,
    marginLeft: 5,
  },
});
