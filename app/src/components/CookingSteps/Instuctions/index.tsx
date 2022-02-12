import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Item } from "./Item";
import { useSharedValue } from "react-native-reanimated";

export const InstructionsStep: React.FC = () => {
  const shuffleBack = useSharedValue(false);

  return (
    <View style={styles.container}>
      <Text style={styles.hint}>
        You got it chef ! just follow these instructions
      </Text>
      <View style={styles.items}>
        <Item shuffleBack={shuffleBack} index={0} />
        <Item shuffleBack={shuffleBack} index={1} />
        <Item shuffleBack={shuffleBack} index={2} />
      </View>
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
  },
  items: {
    flex: 1,
    //justifyContent: "center",
  },
});
