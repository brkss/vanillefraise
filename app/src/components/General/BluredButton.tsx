import React from "react";
import { View, Pressable, Text, StyleSheet, Platform } from "react-native";
import { BlurView } from "expo-blur";

interface Props {
  txt: string;
  clicked: () => void;
}

export const BluredButton: React.FC<Props> = ({ txt, clicked }) => {
  return (
    <Pressable onPress={() => clicked()} style={styles.container}>
      {Platform.OS === "android" ? (
        <View style={styles.content}>
          <Text style={styles.txt}>{txt}</Text>
        </View>
      ) : (
        <BlurView style={styles.content} intensity={90} tint={"dark"}>
          <Text style={styles.txt}>{txt}</Text>
        </BlurView>
      )}
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    borderRadius: 19,
    overflow: "hidden",
  },
  content: {
    padding: 20,
    borderRadius: 19,
    width: "100%",
    backgroundColor: "#434343",
  },
  txt: {
    fontFamily: "AvNextBold",
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
