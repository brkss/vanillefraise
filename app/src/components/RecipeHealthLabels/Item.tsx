import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

interface Props {
  label: string;
}

export const Item: React.FC<Props> = ({ label }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: colors.c3,
    borderRadius: 7,
  },
  txt: {
    fontWeight: "bold",
    color: '#434343'
  },
});
