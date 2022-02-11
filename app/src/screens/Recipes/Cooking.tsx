import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Start } from "../../components";

export const Cooking: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Start finish={() => console.log("Finished !")} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FBF0D3",
  },
});
