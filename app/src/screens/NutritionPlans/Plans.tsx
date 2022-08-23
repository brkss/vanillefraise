import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Platform,
  ImageBackground,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//import { } from ''
import { NutritionPlanThumbnail } from "../../components";

const tmp = [
  {
    image: require("../../assets/hair.jpeg"),
    title: "Keep Healthy Hair",
  },
  {
    image: require("../../assets/skin.gif"),
    title: "Skin Health",
  },
  {
    image: require("../../assets/energy.jpeg"),
    title: "More Energy",
  },
  {
    image: require("../../assets/brain.jpeg"),
    title: "Strong Brain",
  },
  {
    image: require("../../assets/stress.png"),
    title: "Reduce Stress",
  },
];

export const NutritionPlans: React.FC<any> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{ flex: 1, marginBottom: Platform.OS === "ios" ? -40 : 0 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={styles.box}>
            <Text style={styles.title}>Nutrition Plans </Text>
            <Text style={styles.subtitle}>
              Apply nutrtion management plans to go micro on certain situations.
            </Text>
          </View>
          <View>
            {tmp.map((plan, key) => (
              <NutritionPlanThumbnail
                clicked={() => navigation.push("NutritionPlanDetails")}
                key={key}
                title={plan.title}
                image={plan.image}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#6B6B6B",
    fontWeight: "bold",
    textAlign: "center",
  },
  box: {
    padding: 15,
  },
});
