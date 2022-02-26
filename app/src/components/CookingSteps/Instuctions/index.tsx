import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Item } from "./Item";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedReaction,
  withSpring,
} from "react-native-reanimated";
import { Button } from "../../General/Button";

interface Props {
  finish: () => void;
  instructions: any[];
}

export const InstructionsStep: React.FC<Props> = ({ finish, instructions }) => {
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
        {instructions.map((inst, key) => (
          <Item
            swipedAll={swipedAll}
            shuffleBack={shuffleBack}
            txt={inst.raw}
            index={key}
            key={key}
          />
        ))}
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
