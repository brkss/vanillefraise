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

import { TranslatedInstruction } from "../../../generated/graphql";

interface Props {
  finish: () => void;
  instructions: any[];
  navigation: any;
  title: string;
  restart: () => void;
}

export const InstructionsStep: React.FC<Props> = ({
  finish,
  instructions,
  navigation,
  title,
}) => {
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
        {instructions.reverse().map((inst, key) => {
          return (
            <Item
              swipedAll={swipedAll}
              shuffleBack={shuffleBack}
              txt={inst.raw}
              index={key}
              num={instructions.length - key - 1}
              key={key}
              clicked={() =>
                navigation.push("ExpandedInstruction", {
                  index: instructions.length - key,
                  txt: inst.raw,
                  title: title,
                })
              }
            />
          );
        })}
      </View>
      <Animated.View style={[styles.row, style]}>
        <View style={styles.item}>
          <Button txt={"Done"} clicked={() => finish()} />
        </View>
        <View style={styles.item}>
          <Button txt={"Restart"} clicked={() => finish()} />
        </View>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  hint: {
    fontFamily: "AvNextBold",
    fontSize: 17,
    textAlign: "center",
  },
  items: {
    flex: 1,
    //justifyContent: "center",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
    padding: 10,
  },
});
