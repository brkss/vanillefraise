import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "./Button";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

interface Props {
  title: string;
  description: string;
  icon: string;
  isLast?: boolean;
  login: () => void;
  register: () => void;
}

export const IntroSlider: React.FC<Props> = ({
  icon,
  title,
  description,
  isLast,
  login,
  register
}) => {
  return (
    <View style={styles.container}>
      <BlurView style={{ flex: 1, justifyContent: "space-evenly" }}>
        <Text style={styles.icon}>{icon}</Text>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {isLast && (
          <View style={{ marginTop: 30 }}>
            <Button clicked={() => register()} txt={"Get Started"} />
            <Button clicked={() => login()} txt={"Already have an account ?"} />
          </View>
        )}
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    //justifyContent: "space-between",
    //alignItems: "center",
    //backgroundColor: "white",
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
