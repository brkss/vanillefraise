import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

interface Props {
  title: string;
  value: number;
  unit: string;
  recomended: number;
  clicked: () => void;
}

const resize = (str: string) => {
  if (str.length > 18) return `${str.slice(0, 18)} ..`;
  return str;
};

const calcPercent = (recomended: number, val: number) => {
  if ((recomended === 0 || recomended === -1) && val == 0) return 10;
  else if ((recomended === 0 || recomended == -1) && val > 0) return 100;
  const res = (val * 100) / recomended;
  if (res > 100) return 100;
  if (res < 10) return 10;
  return res;
};

const getColor = (val: number) => {
  if (val <= 60 && val > 30) return "#F8DFAF";
  else if (val <= 30) return "#FFBBA0";
  else return "#B7D89D";
};

export const NutrientItem: React.FC<Props> = ({
  unit,
  value,
  title,
  recomended,
  clicked,
}) => {
  return (
    <Pressable onPress={() => clicked()} style={styles.container}>
      <Text style={styles.title}>{resize(title)}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
      {recomended > 0 ? (
        <Text style={styles.recomended}>
          {recomended} {unit} recomended per day.
        </Text>
      ) : null}
      <View
        style={[
          styles.bar,
          {
            backgroundColor: getColor(calcPercent(recomended, value)),
            width: `${calcPercent(recomended, value)}%`,
          },
        ]}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    //borderWidth: 1,
    padding: 10,
    backgroundColor: "#ECE8E8",
    height: 110,
    marginBottom: 10,
    borderRadius: 14,
    marginRight: 10,
    minWidth: 150,
  },
  title: {
    fontSize: 13,
    fontWeight: "400",
    color: "#434343",
  },
  value: {
    fontSize: 21,
    fontWeight: "bold",
  },
  bar: {
    marginTop: 7,
    height: 15,
    backgroundColor: "#B7D89D",
    width: "60%",
    borderRadius: 10,
  },
  recomended: {
    fontSize: 10,
    color: "#434343",
  },
});
