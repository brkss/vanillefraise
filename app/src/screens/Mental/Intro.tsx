import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
//import { }, Animated from 'react-native-reanimated';

export const MentalHealthIntro: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={[styles.circle]} />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#272727",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#939393",
    borderRadius: 40,
  },
});
