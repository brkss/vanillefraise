import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  //withDelay,
  //withTiming,
} from "react-native-reanimated";

interface Props {
  changed: (val: number) => void;
  val: number;
  unit: string;
}

export const ValueSwitch: React.FC<Props> = ({ changed, val, unit }) => {
  const scale = useSharedValue(1);
  const [value, setValue] = React.useState(val == -1 ? 0 : val);
  const valStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePlus = () => {
    changed(value + 1);
    setValue((curr) => curr + 1);
  };
  const handleMinus = () => {
    if (value > 0) {
      changed(value - 1);
      setValue((curr) => curr - 1);
    }
  };

  return (
    <View style={styles.value}>
      <Pressable onPress={handleMinus} style={styles.btn}>
        <Text style={styles.btnTxt}>-</Text>
      </Pressable>
      <View style={{ flexDirection: "row", alignItems: "baseline" }}>
        <Animated.Text style={[styles.val, valStyle]}>{value}</Animated.Text>
        <Animated.Text style={[styles.unit, valStyle]}>{unit}</Animated.Text>
      </View>
      <Pressable onPress={handlePlus} style={styles.btn}>
        <Text style={styles.btnTxt}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  value: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#C6C5C5",
    padding: 5,
    borderRadius: 17,
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTxt: {
    marginTop: -4,
    fontSize: 25,
    fontWeight: "bold",
  },
  val: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
  unit: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
  },
});
