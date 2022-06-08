import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface Props {
  pressed: () => void;
  txt: string;
  selected?: boolean;
  info: () => void;
}

export const FoodItem: React.FC<Props> = ({ txt, pressed, selected, info }) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: selected ? "black" : "transparent" },
      ]}
      onPress={pressed}
    >
      <View style={{ flexDirection: "row" }}>
        <View
          style={[
            styles.circle,
            { backgroundColor: selected ? "#434343" : "#888888" },
          ]}
        />
        <Text style={styles.txt}>{txt}</Text>
      </View>
      <Pressable style={styles.info} onPress={info}>
        <Text style={styles.infoText}>i</Text>
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    padding: 15,
    backgroundColor: "#DCD9D9",
    flexDirection: "row",
    borderRadius: 7,
    alignItems: "center",
    borderColor: "#434343",
    borderWidth: 2,
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
  },
  circle: {
    height: 17,
    width: 17,
    borderRadius: 17,
    backgroundColor: "black",
    marginRight: 10,
  },
  info: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
  },
  infoText: {
    color: "white",
  },
});
