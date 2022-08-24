import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlanTrackedElement } from "../../components";
import { BluredButton } from "../../components";

const tmp = [
  {
    name: "Omega-3 fats",
    amount: "250–300mg",
    description:
      "help reduce inflammation, and make your skin less sensitive to the sun.",
  },
  {
    name: "Vitamin E",
    amount: "15mg",
    description:
      "help you protect your skin against damage from free radicals and inflammation",
  },
  {
    name: "Zinc",
    amount: "8-11mg",
    description:
      "help reduce inflammation and the production of new skin cells.",
  },
  {
    name: "Vitamin C",
    amount: "70-95mg",
    description:
      "antioxidant that helps protect your skin from oxidative damage.",
  },
  {
    name: "Omega-6 fats",
    amount: "500-600mg",
    description:
      "help reduce inflammation, and make your skin less sensitive to the sun.",
  },
];

export const NutritionPlanDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.title}>Healthy Skin</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
        <Image style={styles.img} source={require("../../assets/stress.png")} />
        <View style={styles.box}>
          <Text style={styles.txt}>
            This managing plan auto track certain element to blance your
            nutrition to protect and keep your skin healthy, prevent skin agging
            and help your pore recover.
          </Text>
          <View style={{ height: 30 }} />
          <Text style={styles.subtitle}>Tracked Elements</Text>
          <View style={{ marginTop: 20 }}>
            {tmp.map((element, key) => (
              <PlanTrackedElement
                key={key}
                description={element.description}
                amount={element.amount}
                name={element.name}
                index={key + 1}
              />
            ))}
          </View>
        </View>
        <Image style={styles.img} source={require("../../assets/stress.png")} />
      </ScrollView>
      <View
        style={{
          position: "absolute",
          bottom: 40,
          width: "100%",
          alignItems: "center",
        }}
      >
        <BluredButton
          txt={"Use This Plan"}
          clicked={() => {
            console.log("use this plan");
          }}
        />
      </View>
      {/*<SafeAreaView style={{flex: 1}}>*/}
      {/*</View></SafeAreaView>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    padding: 10,
  },
  img: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 27,
    color: "#434343",
  },
  subtitle: {
    fontSize: 26,
    fontWeight: "bold",
  },
  box: {
    padding: 10,
  },
  txt: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 14,
    color: "#6E6E6E",
  },
});
