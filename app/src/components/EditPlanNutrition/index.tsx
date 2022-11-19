import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "../General";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";
import { ValueSwitch } from "./Value";
interface Props {
  show: boolean;
  close: () => void;
  value: number;
  unit: string;
  changed: (val: number) => void;
  name: string;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const EditPlanNutrition: React.FC<Props> = ({
  show,
  close,
  unit,
  value,
  changed,
  name,
}) => {
  if (!show) return <></>;

  const shadowOpacity = useSharedValue(0);
  const boxHeight = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  React.useEffect(() => {
    if (show) {
      shadowOpacity.value = withDelay(0, withTiming(1, { duration: 300 }));
      boxHeight.value = withDelay(0, withTiming(220, { duration: 400 }));
      contentOpacity.value = withDelay(400, withTiming(1, { duration: 400 }));
    } else if (!show) {
      shadowOpacity.value = withDelay(0, withTiming(0, { duration: 300 }));
      boxHeight.value = withDelay(400, withTiming(0, { duration: 400 }));
      contentOpacity.value = withDelay(0, withTiming(0, { duration: 400 }));
    }
  }, [show]);

  const boxStyle = useAnimatedStyle(() => {
    return {
      height: boxHeight.value,
    };
  });
  const shadowStyle = useAnimatedStyle(() => {
    return {
      opacity: shadowOpacity.value,
    };
  });
  const contentStyle = useAnimatedStyle(() => {
    return {
      opacity: contentOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <AnimatedPressable
        onPress={() => close()}
        style={[styles.shadow, shadowStyle]}
      />
      <Animated.View style={[styles.box, boxStyle]}>
        <Animated.View
          style={[
            contentStyle,
            { justifyContent: "space-around", height: "100%" },
          ]}
        >
          <View style={{ alignItems: "flex-end" }}>
            <Pressable onPress={close} style={styles.closeCircle}>
              <Text style={styles.closeText}>-</Text>
            </Pressable>
          </View>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
          </View>
          <ValueSwitch
            val={value}
            unit={unit}
            changed={(val: number) => changed(val)}
          />
          {/*<Button clicked={() => {}} txt={"Save"} />*/}
        </Animated.View>
      </Animated.View>
      {/*<View style={styles.shadow} />*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    position: "absolute",
    top: 0,
    left: 0,
    //backgroundColor: "#00000080",
    width: "100%",
    height: "100%",
    //padding: 10,
    justifyContent: "flex-end",
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#00000080",
    width: "100%",
    height: "100%",
  },
  box: {
    margin: 10,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 32,
    height: 280,
    justifyContent: "space-around",
    //position: "absolute",
    //bottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "AvNextBold",
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
  header: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
  closeCircle: {
    height: 32,
    width: 32,
    backgroundColor: "#B6B6B6",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  closeText: {
    marginTop: -4,
    fontSize: 30,
  },
});
