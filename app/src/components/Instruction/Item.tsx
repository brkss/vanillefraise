import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils";

export const Item: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>
        Spray a skillet with cooking spray and heat over medium-high heat.
        Quickly brown pork chops in the skillet, seasoning with garlic salt, 5
        to 7 minutes total. Transfer to a slow cooker and pour French onion soup
        on top.
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
