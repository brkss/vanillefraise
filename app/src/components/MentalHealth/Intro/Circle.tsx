import React from "react";
import { View, StyleSheet, Dimensions, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

interface Props {
  d: number;
  x: number;
  y: number;
  duration: number;
  icon: string;
}

const { height: wH, width: wW } = Dimensions.get("window");

export const MentalIntroCircle: React.FC<Props> = ({
  d,
  y,
  x,
  duration,
  icon,
}) => {
  const offsetX = useSharedValue((wW - d) / 2);
  const offsetY = useSharedValue(wH);
  const start = useSharedValue({ x: x, y: y });
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
  }, []);

  const gesture = Gesture.Pan()
    .onUpdate(({ translationX, translationY }) => {
      offsetX.value = start.value.x + translationX;
      offsetY.value = start.value.y + translationY;
    })
    .onEnd(() => {
      offsetX.value = withTiming(start.value.x, { duration: 500 });
      offsetY.value = withTiming(start.value.y, { duration: 500 });
    });

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

  return (
    <View pointerEvents={"box-none"}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, style]}>
          <Text style={[styles.iconT, { fontSize: d * 0.5 }]}>{icon}</Text>
        </Animated.View>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    ...StyleSheet.absoluteFillObject,
    height: 40,
    width: 40,
    borderRadius: 40,
    backgroundColor: "#D6D6D6",
    justifyContent: "center",
    alignItems: "center",
  },
  iconT: {
    fontSize: 17,
  },
});
