import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import { MentalIntroCircle } from "../../components/MentalHealth";
import { useFonts } from "expo-font";
import { Button } from "../../components";
import { circles } from "../../utils/data/mentalintro.data";
const { width: w, height: h } = Dimensions.get("window");

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
            Improve{"\n"}Your{"\n"}Mental{"\n"}Health.
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
