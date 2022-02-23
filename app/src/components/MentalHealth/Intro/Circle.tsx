import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface Props {
  d: number;
  x: number;
  y: number;
  duration: number;
}

const { height: wH, width: wW } = Dimensions.get("window");

export const MentalIntroCircle: React.FC<Props> = ({ d, y, x, duration }) => {
  const offsetX = useSharedValue((wW - d) / 2);
  const offsetY = useSharedValue(wH);
  const circleDim = useSharedValue(d);

  React.useEffect(() => {
    offsetY.value = withDelay(
      150,
      withTiming(y, { duration: duration, easing: Easing.inOut(Easing.ease) })
    );
    offsetX.value = withDelay(
      150,
      withTiming(x, { duration: duration, easing: Easing.inOut(Easing.ease) })
    );
    circleDim.value = withDelay(
      150,
      withTiming(d, { duration: duration, easing: Easing.inOut(Easing.ease) })
    );
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      width: circleDim.value,
      height: circleDim.value,
      borderRadius: circleDim.value,
      transform: [
        { perspective: 1500 },
        { translateY: offsetY.value },
        { translateX: offsetX.value },
      ],
    };
  });

  return <Animated.View style={[styles.circle, style]} />;
};

const styles = StyleSheet.create({
  circle: {
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "white",
  },
});
