import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";

interface Props {
  title: string;
  color: string;
  navigate: () => void;
  recipes: number;
  index: number;
}

const DELAY_RATE = 200;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const MealItem: React.FC<Props> = ({
  color,
  title,
  navigate,
  recipes,
  index,
}) => {
  const scale = useSharedValue(0.1);
  const opacity = useSharedValue(0);

  React.useEffect(() => {
    scale.value = withDelay(
      100 + DELAY_RATE * index,
      withTiming(1, { duration: 500 })
    );
    opacity.value = withDelay(
      550 + DELAY_RATE * index,
      withTiming(1, { duration: 500 })
    );
  }, []);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const txtStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <AnimatedPressable
      onPress={() => navigate()}
      style={[styles.container, { backgroundColor: "#ECE8E8" }, boxStyle]}
    >
      <Animated.Text style={[styles.recipes, txtStyle]}>
        {recipes} recipes
      </Animated.Text>
      <Animated.Text style={[styles.title, txtStyle]}>{title}</Animated.Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
    height: 120,
    justifyContent: "flex-end",
    //borderWidth: 1,
    borderRadius: 11,
  },
  recipe: {
    color: "black",
    fontSize: 11,
    fontWeight: "400",
    fontFamily: "AvNextBold",
  },
  title: {
    fontWeight: "bold",
    fontSize: 19,
    fontFamily: "AvNextBold",
    marginTop: 5,
    color: "#434343",
  },
  recipes: {
    color: "black",
    fontSize: 13,
    fontFamily: "AvNext",
    //color: "#434343",
  },
});
