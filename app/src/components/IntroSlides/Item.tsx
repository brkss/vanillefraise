import React from "react";
import { Text, View, StyleSheet, Dimensions, Alert } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

interface Props {
  text: string;
}

const MAX_WIDTH = width / 2;

export const IntroSlideElement: React.FC<Props> = ({ text }) => {
  const offsetX = useSharedValue(-MAX_WIDTH - 120);
  const offsetY = useSharedValue(0);
  React.useEffect(() => {
    offsetX.value = withRepeat(
      withTiming(width / 2 + 100, { duration: 9000 }, () => {
        //offsetX.value = -(width / 2) - 100;
      }),
      -1,
      false,
      (finished) => {
        console.log("Finished Animation");
        //offsetX.value = -(width / 2) - 100;
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
    //backgroundColor: "#FFE8E8",
    padding: 13,
    paddingTop: 15,
    paddingHorizontal: 30,
    borderRadius: 50,
    width: width * 6,
  },
  txt: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
  },
});
