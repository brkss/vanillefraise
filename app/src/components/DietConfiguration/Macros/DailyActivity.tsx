import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { activity_factors } from "../../../utils/data/activityFactors";

interface Props {
  onSelect: (factor: number) => void;
}

export const DailyActivity: React.FC<Props> = ({onSelect}) => {
  const [active, setActive] = React.useState(0);


  const select = (index: number) => {
    setActive(index);
    onSelect(activity_factors[index].factor)
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DAILY ACTIVITY</Text>
      <View style={styles.options}>
        {activity_factors.map((option, key) => (
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
