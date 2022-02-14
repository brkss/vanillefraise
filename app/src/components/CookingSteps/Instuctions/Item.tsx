import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  withSpring,
  withDelay,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { snapPoint } from "react-native-redash";

const { width: wWidth, height } = Dimensions.get("window");
const SNAP_POINTS = [-wWidth, 0, wWidth];
const DURATION = 250;

interface Props {
  index: number;
  shuffleBack: Animated.SharedValue<boolean>;
  swipedAll: Animated.SharedValue<boolean>;
}

export const Item: React.FC<Props> = ({ index, shuffleBack, swipedAll }) => {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(-height);
  const start = useSharedValue({ x: 0, y: 0 });
  const isPressed = useSharedValue(false);
  const rotateZ = useSharedValue(0);
  const delay = index * DURATION;
  const theta = -10 + Math.random() * 20;

  React.useEffect(() => {
    offsetY.value = withDelay(
      delay,
      withTiming(0, { duration: DURATION, easing: Easing.inOut(Easing.ease) })
    );
    rotateZ.value = withDelay(delay, withSpring(theta));
  }, [delay, index, rotateZ, theta, offsetY]);

  useAnimatedReaction(
    () => shuffleBack.value,
    (v) => {
      if (v) {
        const duration = 150 * index;
        offsetX.value = withDelay(
          duration,
          withSpring(0, {}, () => {
            shuffleBack.value = false;
          })
        );
        rotateZ.value = withDelay(duration, withSpring(theta));
      }
    }
  );

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
      start.value.x = offsetX.value;
      start.value.y = offsetY.value;
      const isLast = index === 0;
      const isSwipedLeftOrRight = dest !== 0;
      if (isLast && isSwipedLeftOrRight) {
        shuffleBack.value = true;
        swipedAll.value = true;
      }
    })
    .onFinalize(() => {
      isPressed.value = false;
    });
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1500 },
        { rotateZ: `${rotateZ.value}deg` },
        { translateX: offsetX.value },
        { translateY: offsetY.value },
        { scale: withSpring(isPressed.value ? 0.9 : 1) },
      ],
    };
  });

  return (
    <View pointerEvents={"box-none"} style={styles.box}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.container, style]}>
          <Text style={styles.number}>#{index + 1}</Text>
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
  box: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    padding: 12,
    //borderColor: "#C8B275",
    //borderWidth: 1,
    backgroundColor: "#C3F9B9",
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
