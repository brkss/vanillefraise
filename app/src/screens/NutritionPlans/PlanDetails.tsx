import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { PlanTrackedElement } from "../../components";

export const NutritionPlanDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image style={styles.img} source={require("../../assets/stress.png")} />
        <View style={styles.box}>
          <Text style={styles.title}>Healthy Skin</Text>
          <Text style={styles.txt}>
            This managing plan auto track certain element to blance your
            nutrition to protect and keep your skin healthy, prevent skin agging
            and help your pore recover.
          </Text>
          <View style={{ height: 30 }} />
          <Text style={styles.subtitle}>Tracked Elements</Text>
          <View style={{ marginTop: 20 }}>
            <PlanTrackedElement />
            <PlanTrackedElement />
            <PlanTrackedElement />
            <PlanTrackedElement />
            <PlanTrackedElement />
            <PlanTrackedElement />
          </View>
        </View>
      </ScrollView>
      {/*<SafeAreaView style={{flex: 1}}>*/}
      {/*</View></SafeAreaView>*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: "100%",
    height: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 31,
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
