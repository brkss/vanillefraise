import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const CreateRecord: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Create Record</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
