import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  saved?: boolean;
}

export const SaveRecipe: React.FC<Props> = ({ saved }) => {
  return (
    <View style={styles.container}>
      <Ionicons size={25} name={saved ? "bookmark" : "bookmark-outline"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});
