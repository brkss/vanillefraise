import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

export const Item: React.FC = () => {
  const offset = useSharedValue({ x: 0, y: 0 });
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const gesture = Gesture.Pan()
    .onBegin(() => {
      isPressed.value = true;
    })
    .onUpdate((e) => {
      offset.value = {
        x: e.translationX + start.value.x,
        y: e.translationY + start.value.y,
      };
    })
    .onEnd(() => {
      start.value = {
        x: offset.value.x,
        y: offset.value.y,
      };
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: offset.value.x },
        { translateY: offset.value.y },
        { scale: withSpring(isPressed ? 0.9 : 1) },
      ],
    };
  });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={style}>
          <Text style={styles.number}>#1</Text>
          <Text style={styles.txt}>
            Spray a skillet with cooking spray and heat over medium-high heat.
            Quickly brown pork chops in the skillet, seasoning with garlic salt,
            5 to 7 minutes total. Transfer to a slow cooker and pour French
            onion soup on top.
          </Text>
        </Animated.View>
      </GestureDetector>
    </View>
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
