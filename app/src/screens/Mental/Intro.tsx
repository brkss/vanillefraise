import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { MentalIntroCircle } from "../../components/MentalHealth";
import { useFonts } from "expo-font";
import { Button } from "../../components";
const { width: w, height: h } = Dimensions.get("window");

const circles = [
  {
    x: 0.3,
    y: 0,
    d: 100,
    duration: 900,
    icon: "🧘‍♀️",
  },
  {
    x: 0.7,
    y: 0.1,
    d: 70,
    duration: 1000,
    icon: "🧠",
  },
  {
    x: 0.7,
    y: 0.23,
    d: 90,
    duration: 1000,
    icon: "🐝",
  },
  {
    x: 0.4,
    y: 0.18,
    d: 56,
    duration: 1200,
    icon: "❤️",
  },
  {
    x: 0.1,
    y: 0.17,
    d: 40,
    duration: 1100,
    icon: "🦋",
  },
  {
    x: 0,
    y: 0.26,
    d: 56,
    duration: 1200,
    icon: "😄",
  },
  {
    x: 0.3,
    y: 0.3,
    d: 70,
    duration: 1100,
    icon: "🐇",
  },
];

export const MentalHealthIntro: React.FC = () => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
  if (!helviticaCondensed) return <View style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            I{"\n"}9{"\n"}80{"\n"}60.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {circles.map((c, key) => (
            <MentalIntroCircle
              d={c.d}
              x={w * c.x}
              y={h * c.y}
              key={key}
              duration={c.duration}
              icon={c.icon}
            />
          ))}
        </View>
        <Button clicked={() => {}} txt={"Request Early Access"} />
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
    fontSize: 70,
    lineHeight: 70,
    fontWeight: "bold",
    color: "white",
    fontFamily: "helvitica-condesed",
  },
});
