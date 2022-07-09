import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";

interface Props {
  title: string;
  icon: string;
  choosed: () => void;
}

export const Item: React.FC<Props> = ({ icon, title, choosed }) => {
  return (
    <Pressable onPress={() => choosed()} style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.icon}>{icon}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "red",
  },
  circle: {
    height: 100,
    width: 100,
    borderRadius: 100,
    backgroundColor: "#EDEAEA",
    //backgroundColor: "#B5F7CD",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
    fontFamily: "helvitica-condesed",
  },
});
