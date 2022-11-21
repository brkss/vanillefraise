import React from "react";
import { View, StyleSheet } from "react-native";

interface Props {
  progress: number;
}

export const LoadingBar: React.FC<Props> = ({ progress }) => {
  return (
    <View style={styles.container}>
      <View
        style={[styles.core, { width: `${progress > 100 ? 100 : progress}%` }]}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#D6D4D4",
    alignItems: "flex-start",
    borderRadius: 9,
    marginTop: 5,
    //marginVertical: 5,
  },
  core: {
    height: 20,
    backgroundColor: "#A3D7A6",
    borderRadius: 9,
  },
});
