import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const NotConnected: React.FC = () => {
  return (
    <View style={styles.container}>
      <Ionicons name={"alert-circle-outline"} size={60} />
      <Text style={styles.txt}>Unable to connect to the internet!</Text>
      <Text style={styles.info}>
        However, Offline mode will available soon !
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },
  info: {
    opacity: 0.7,
    marginTop: 7,
  },
});
