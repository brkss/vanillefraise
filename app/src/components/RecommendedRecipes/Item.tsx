import React from "react";
import {
  View,
  Pressable,
  Text,
  ImageBackground,
  StyleSheet,
} from "react-native";
import { CDN } from "../../utils/config/defaults";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";
interface Props {
  title: string;
  image: string;
  clicked: () => void;
  index: number;
}

const adjustTitle = (title: string) => {
  if (title.length > 22) {
    return `${title.substring(0, 22)}..`;
  } else return title;
};

const DELAY_INTERVAL = 200;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const Item: React.FC<Props> = ({ image, title, clicked, index }) => {
  const offset = useSharedValue(5);
  const boxOpacity = useSharedValue(0);
  const opacity = useSharedValue(0);
    React.useEffect(() => {
      offset.value = withDelay(
        300 + DELAY_INTERVAL * index,
        withTiming(0, { duration: 300 })
      );
      boxOpacity.value = withDelay(
        300 + DELAY_INTERVAL * index,
        withTiming(1, { duration: 300 })
      );
      opacity.value = withDelay(
        700 + DELAY_INTERVAL * index,
        withTiming(1, { duration: 400 })
      );
    }, []);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: offset.value }],
      opacity: boxOpacity.value,
    };
  });

  const txtStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <AnimatedPressable
      onPress={() => clicked()}
      style={[styles.container, boxStyle]}
    >
      <ImageBackground
        imageStyle={{ borderRadius: 0 }}
        source={{ uri: `${CDN}/${image}` }}
        style={styles.image}
      >
        <View style={styles.shadow} />
      </ImageBackground>
      <Animated.Text style={[styles.title, txtStyle]}>{adjustTitle(title)}</Animated.Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    marginRight: 10,
  },
  image: {
    height: 200,
    width: 150,
    //borderRadius: 10,
    justifyContent: "flex-end",
  },
  title: {
    fontFamily: "AbFace",
    color: "black",
    fontSize: 16,
    marginTop: 5,
    lineHeight: 18,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "black",
    opacity: 0.2,
    borderRadius: 0,
  },
});
