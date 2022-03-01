import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

interface Props {
  clicked: () => void;
}

export const Info: React.FC<Props> = ({ clicked }) => {
  return (
    <Pressable onPress={() => clicked()} style={styles.container}>
      <View style={styles.row}>
        <Ionicons size={27} name={"ios-information-circle-sharp"} />
        <Text style={{ fontSize: 22, marginHorizontal: 5, fontWeight: "bold" }}>
          Nutrition Info
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    position: "absolute",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 100,
    top: 14,
    left: 10,
    opacity: 0.9,
  },
  row: {
    flexDirection: "row",
  },
});
