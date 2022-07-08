import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

interface Props {
  pressed: () => void;
  txt: string;
  selected?: boolean;
  info: () => void;
  count: number;
}

export const FoodItem: React.FC<Props> = ({
  txt,
  pressed,
  selected,
  info,
  count,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { borderColor: selected ? "black" : "transparent" },
      ]}
      onPress={pressed}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={[
            styles.circle,
            { backgroundColor: selected ? "#434343" : "#888888" },
          ]}
        />
        <View>
          <Text style={styles.txt}>{txt}</Text>
          <Text style={styles.count}>{count} recipe available</Text>
        </View>
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
    backgroundColor: "#E3E5E4",
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
    top: -5,
  },
  infoText: {
    color: "white",
  },
  count: {
    fontSize: 12,
    fontWeight: "300",
    opacity: 0.7,
  },
});
