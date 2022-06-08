import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

export const ReminderCheckBox: React.FC = () => {
  const [check, setChecked] = React.useState(true);

  const handleCheck = () => {
    setChecked((curr) => !curr);
  };

  return (
    <Pressable style={styles.container} onPress={handleCheck}>
      <View style={styles.row}>
        <View
          style={[
            styles.circle,
            { backgroundColor: check ? "#434343" : "#888888" },
          ]}
        />
        <Text style={styles.txt}>Remind Me</Text>
        <Text style={styles.status}>{check ? "ON " : "OFF"}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#DCD9D9",
    borderRadius: 7,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    height: 20,
    width: 20,
    borderRadius: 30,
    backgroundColor: "#434343",
    marginRight: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
  },
  status: {
    fontSize: 15,
    alignSelf: "flex-end",
  },
});
