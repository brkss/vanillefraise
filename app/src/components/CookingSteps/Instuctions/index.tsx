import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Item } from "./Item";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  withSpring,
} from "react-native-reanimated";
import { Button } from "../../";

interface Props {
  finish: () => void;
}

export const InstructionsStep: React.FC<Props> = ({ finish }) => {
  const shuffleBack = useSharedValue(false);
  const swipedAll = useSharedValue(false);
  const btnOpacity = useSharedValue(0);

  useAnimatedReaction(
    () => swipedAll.value,
    (v) => {
      if (v) btnOpacity.value = withSpring(1);
    }
  );

  const style = useAnimatedStyle(() => {
    return {
      opacity: btnOpacity.value,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>
        You got it chef ! just follow these instructions
      </Text>
      <View style={styles.items}>
        <Item swipedAll={swipedAll} shuffleBack={shuffleBack} index={0} />
        <Item swipedAll={swipedAll} shuffleBack={shuffleBack} index={1} />
        <Item swipedAll={swipedAll} shuffleBack={shuffleBack} index={2} />
      </View>
      <Animated.View style={style}>
        <Button txt={"Done !"} clicked={() => finish()} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hint: {
    fontFamily: "helvitica-condesed",
    fontSize: 17,
    textAlign: "center",
  },
  items: {
    flex: 1,
    //justifyContent: "center",
  },
});
