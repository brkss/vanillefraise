import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const { width: wWidth } = Dimensions.get("window");
const SNAP_POINTS = [-wWidth, 0, wWidth];

export const Item: React.FC = () => {
  const rotate = useSharedValue(Math.random() * 9);
  //const offset = useSharedValue({ x: 0, y: 0 });
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate(({ translationX, translationY }) => {
      offsetX.value = translationX + start.value.x;
      offsetY.value = translationY + start.value.y;
    })
    .onEnd(({ velocityX, velocityY }) => {
      const dest = snapPoint(offsetX.value, velocityX, SNAP_POINTS);
      offsetX.value = withSpring(dest, { velocity: velocityX });
      offsetY.value = withSpring(0, { velocity: velocityY });
      start.value = {
        x: offsetX.value,
        y: offsetY.value,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1500 },
        { rotate: `${rotate.value}deg` },
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        { scale: withSpring(isPressed.value ? 0.9 : 1) },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.container, style]}>
        <Text style={styles.number}>#1</Text>
        <Text style={styles.txt}>
          Spray a skillet with cooking spray and heat over medium-high heat.
          Quickly brown pork chops in the skillet, seasoning with garlic salt, 5
          to 7 minutes total. Transfer to a slow cooker and pour French onion
          soup on top.
        </Text>
      </Animated.View>
    </GestureDetector>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderColor: "#C8B275",
    borderWidth: 1,
    backgroundColor: "#FCE3A0",
    borderRadius: 27,
  },
  number: {
    textAlign: "center",
    marginBottom: 30,
    fontFamily: "helvitica-condesed",
    fontSize: 18,
    fontWeight: "bold",
  },
  txt: {
    marginBottom: 30,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    fontSize: 17,
  },
});
