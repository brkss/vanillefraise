import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const PickTime: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>PICK TIME</Text>
      <DateTimePicker value={new Date()} mode={"time"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  heading: {
    //
  }
});
