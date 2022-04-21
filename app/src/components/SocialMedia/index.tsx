import React from "react";
import { View, StyleSheet, Linking } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.item, { alignItems: "flex-end" }]}>
          <Ionicons name={"logo-twitter"} size={25} />
        </View>
        <View style={[styles.item]}>
          <Ionicons name={"logo-instagram"} size={25} />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    paddingHorizontal: 10,
  },
});
