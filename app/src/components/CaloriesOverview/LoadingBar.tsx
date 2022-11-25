import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withDelay,
} from "react-native-reanimated";

interface Props {
  progress: number;
}

export const LoadingBar: React.FC<Props> = ({ progress }) => {
  const mainWidth = useSharedValue(0);
  const progressWidth = useSharedValue(0);

  React.useEffect(() => {
    mainWidth.value = withTiming(100, { duration: 550 });
    progressWidth.value = withDelay(
      650,
      withTiming(progress, { duration: 400 })
    );
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      width: `${mainWidth.value}%`,
    };
  });

  const progressStyle = useAnimatedStyle(() => {
    return {
      width: `${progressWidth.value}%`,
    };
  });

  return (
    <View>
      <Animated.View style={[styles.container, style]}>
        <Animated.View style={[styles.bar, progressStyle]} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    marginVertical: 10,
    backgroundColor: "#EEEEEE",
    borderRadius: 9,
    //width: "100%",
    //borderWidth: 1,
  },
  bar: {
    height: 22,
    backgroundColor: "#C8E7BC",
    borderRadius: 100,
  },
});
