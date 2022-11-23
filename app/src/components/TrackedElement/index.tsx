import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { LoadingBar } from "./LoadingBar";

interface Props {
  name: string;
  current: number;
  target: number;
  unit: string;
  clicked: () => void;
}

export const TrackedElement: React.FC<Props> = ({
  unit,
  target,
  current,
  name,
  clicked,
}) => {
  return (
    <Pressable onPress={clicked} style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.value}>
          {current}/{target} {unit}
        </Text>
      </View>
      <LoadingBar progress={(current * 100) / target} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    //backgroundColor: "gray",
    borderRadius: 18,
    marginTop: 5,
  },
  name: {
    fontSize: 16,
    fontFamily: "AvNextBold",
    fontWeight: "bold",
  },
  value: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 14,
    opacity: 0.7,
  },
});
