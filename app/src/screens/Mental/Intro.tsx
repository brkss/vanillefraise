import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { MentalIntroCircle } from "../../components/MentalHealth";

const { width: w, height: h } = Dimensions.get("window");

const circles = [
  {
    x: 0.3,
    y: 0.4,
    d: 100,
    duration: 900,
  },
  {
    x: 0.7,
    y: 0.5,
    d: 70,
    duration: 1000,
  },
  {
    x: 0.4,
    y: 0.5,
    d: 56,
    duration: 1200,
  },
  {
    x: 0.1,
    y: 0.3,
    d: 40,
    duration: 1100,
  },
];

export const MentalHealthIntro: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Improve{"\n"}Your{"\n"}
          </Text>
        </View>
        {circles.map((c, key) => (
          <MentalIntroCircle
            d={c.d}
            x={w * c.x}
            y={h * c.y}
            key={key}
            duration={c.duration}
          />
        ))}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#272727",
    padding: 15,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#939393",
    borderRadius: 40,
  },
  headerContainer: {},
  header: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'white'
  },
});
