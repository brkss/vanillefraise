import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { activity_factors } from "../../../utils/data/activityFactors";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  onSelect: (factor: number) => void;
  factor: number;
}

export const DailyActivity: React.FC<Props> = ({ onSelect, factor }) => {
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    const index = activity_factors.findIndex((x) => x.factor === factor);
    if (index != -1) setActive(index);
  }, []);

  const select = (index: number) => {
    setActive(index);
    onSelect(activity_factors[index].factor);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DAILY ACTIVITY</Text>
      <Text style={styles.description}>
        {" "}
        <Ionicons size={16} name={"information-circle-outline"} />{" "}
        {activity_factors[active].description}
      </Text>
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
    backgroundColor: "#f0eada",
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
  description: {
    marginVertical: 10,
    //textAlign: "center",
    fontSize: 17,
  },
});
