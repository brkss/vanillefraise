import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";

export const NewActivity: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView></SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
