import React from "react";
import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("screen");

interface Props {
  text: string;
}

const MAX_WIDTH = width / 2;

export const IntroSlideElement: React.FC<Props> = ({ text }) => {
  const offsetX = useSharedValue(Math.random() * MAX_WIDTH);
  const offsetY = useSharedValue(Math.random() * -height);
  React.useEffect(() => {
    offsetX.value = withRepeat(
      withTiming(MAX_WIDTH, { duration: 5000 }),
      -1,
      false,
      (finished) => {
        console.log("Finished Animation");
        if (finished) {
          offsetX.value = -MAX_WIDTH;
        }
      }
    );
  }, []);
  const style = useAnimatedStyle(() => {
    return {
      transform: [
        { perspective: 1500 },
        { translateX: offsetX.value },
        { translateY: offsetY.value },
      ],
    };
  });
  return (
    <View style={[styles.box]}>
      <Animated.View style={[styles.container, style]}>
        <Text style={styles.txt}>{text}</Text>
      </Animated.View>
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
    backgroundColor: "#FFE8E8",
    padding: 13,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
  },
  txt: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
  },
});
