import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  saved?: boolean;
  save: () => void;
}

export const SaveRecipe: React.FC<Props> = ({ saved, save }) => {
  return (
    <View style={styles.container}>
      <Ionicons onPress={() => save()} size={25} name={saved ? "bookmark" : "bookmark-outline"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});
