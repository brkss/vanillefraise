import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const options = [
  {
    icon: "1",
    name: "Sedentary\nActive",
  },
  {
    icon: "2",
    name: "Lightly\nActive",
  },
  {
    icon: "3",
    name: "Moderately\nActive",
  },
  {
    icon: "4",
    name: "Very\nActive",
  },
  {
    icon: "5",
    name: "Extra\nActive",
  },
];

export const DailyActivity: React.FC = () => {
  const [active, setActive] = React.useState(0);

  const select = (index: number) => {
    setActive(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DAILY ACTIVITY</Text>
      <View style={styles.options}>
        {options.map((option, key) => (
          <Pressable
            key={key}
            onPress={() => select(key)}
            style={styles.option}
          >
            <View style={styles.circle}>
              <Text style={styles.circleText}>{option.icon}</Text>
            </View>
            <Text style={styles.optionText}>{option.name}</Text>
            {key === active && <View style={styles.active} />}
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 15,
    fontWeight: "bold",
    color: "#434343",
  },
  option: {
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    height: 60,
    width: 60,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DBF3D4",
  },
  circleText: {
    //
  },
  optionText: {
    fontSize: 13,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 5,
  },
  active: {
    height: 10,
    width: 10,
    backgroundColor: "black",
    borderRadius: 10,
    marginTop: 5,
    position: "absolute",
    bottom: -15,
  },
});