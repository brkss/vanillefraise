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
import { Languages } from "../../Translation/Languages";
import { TranslatedInstruction } from "../../../generated/graphql";

interface Props {
  finish: () => void;
  instructions: any[];
  navigation: any;
  title: string;
}

export const InstructionsStep: React.FC<Props> = ({
  finish,
  instructions,
  navigation,
  title,
}) => {
  const [lang, setLang] = React.useState<string>("en");
  const shuffleBack = useSharedValue(false);
  const swipedAll = useSharedValue(false);
  const btnOpacity = useSharedValue(0);

  const handleLang = (instruction: TranslatedInstruction) => {
    if (lang === "es" && instruction.es) return instruction.es;
    else if (lang === "fr" && instruction.fr) return instruction.fr;
    else if (lang === "ar" && instruction.ar) return instruction.ar;
    else return instruction.raw;
  };

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
              txt={handleLang(inst)}
              index={key}
              num={instructions.length - key - 1}
              key={key}
              clicked={() =>
                navigation.push("ExpandedInstruction", {
                  index: instructions.length - key,
                  txt: handleLang(inst),
                  title: title,
                })
              }
            />
          );
        })}
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
    fontFamily: "AvNextBold",
    fontSize: 17,
    textAlign: "center",
  },
  items: {
    flex: 1,
    //justifyContent: "center",
  },
});
