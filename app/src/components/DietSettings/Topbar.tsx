import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

const steps = ["START", "MACROS", "FOOD", "SCHEDULE", "FINISH"];

interface Props {
  selected: string;
  onSelect: (step: string) => void;
}

export const DietSettingsTopBar: React.FC<Props> = ({onSelect, selected}) => {
  return (
    <View style={styles.container}>
      {steps.map((s, key) => (
        <Pressable onPress={() => onSelect(s)} key={key} style={styles.item}>
          <View
            style={[
              styles.circle,
              { backgroundColor: s === selected ? "#FF8E8E" : "lightpink" },
            ]}
          />
          <Text style={styles.txt}>{s}</Text>
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    padding: 5,
    alignItems: "center",
  },
  circle: {
    height: 42,
    width: 42,
    borderRadius: 42,
    backgroundColor: "lightpink",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 10,
    marginTop: 4,
  },
});
