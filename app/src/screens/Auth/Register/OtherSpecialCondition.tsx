import React from "react";
import { Text, View, SafeAreaView, StyleSheet } from "react-native";

export const OtherSpecialCondition: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text></Text>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6EAE0",
  },
});
