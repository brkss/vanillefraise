import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

interface Props {
  txt: string;
}

export const Item: React.FC<Props> = ({txt}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        {txt}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.c2,
    borderRadius: 13,
    marginBottom: 10,
  },
  txt: {
    fontSize: 16,
    lineHeight: 20,
  },
});
