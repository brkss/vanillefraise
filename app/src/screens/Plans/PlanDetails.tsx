import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { Heading, PlanNutritientItem } from "../../components";

const data = [
  {
    title: "Healthy Fats (Omega-3)",
    descritpion:
      "glowing skin, too little fat in your diet can make your skin wrinkled and dry, they block a chemical that lets skin cancer grow and spread, and they may lower inflammation.",
    quantity: 0,
    unit: "mg",
  },
{
    title: "",
    descritpion: "",
    quantity: 0,
    unit: "mg",
  },
];

export const PlanDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
          <Heading title={"Skin Health"} />
        </View>
        <Image
          resizeMode={"cover"}
          style={styles.image}
          source={require("../../assets/skin.png")}
        />
        <View style={styles.content}>
          <Text style={styles.description}>
            keep your skin healthy by nuturally reaching recommeded daily intake
            of certain nutrienrs that help protect your skin and keep it healthy
          </Text>
          <Text style={styles.title}>Nutritiens</Text>
          <PlanNutritientItem />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    padding: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: "#434343",
    fontFamily: "AvNextBold",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontFamily: "AvNextBold",
    color: "#434343",
    marginTop: 20,
    marginBottom: 10,
  },
});
