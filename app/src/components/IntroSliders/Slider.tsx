import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  title: string,
  description: string;
  icon: string;
}

export const IntroSlider: React.FC<Props> = ({icon, title, description}) => {
  return (
    <View style={styles.container}>
      <View style={{}}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>
          {description}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  icon: {
    fontSize: 100,
    textAlign: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    color: "#434343",
  },
  description: {
    textAlign: "center",
    marginTop: 10,
  },
});
