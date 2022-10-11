import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Heading, PlanNutritientItem, BluredButton } from "../../components";

const data = [
  {
    title: "Healthy Fats (Omega-3)",
    descritpion:
      "glowing skin, too little fat in your diet can make your skin wrinkled and dry, they block a chemical that lets skin cancer grow and spread, and they may lower inflammation.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Protein",
    descritpion:
      "Your body turns protein into collagen and keratin that form the structure of skin, also it helps slough off old skin.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Vitamin A",
    descritpion:
      "Without enough vitamin A, your skin might get dry and itchy or bumpy. Both the upper and lower layers of skin need vitamin A to prevent sun damage by interrupting the process that breaks down collagen. Since it's an antioxidant, it gives your skin some protection against sunburn (not as much as wearing sunscreen), also help cuts and scrapes heal.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Vitamin C",
    descritpion:
      "Vitamin C is a powerful antioxidant, protecting you from free radicals and  lowering your chance of skin cancer, low levels of vitamin C can cause easy bruising and bleeding gums, as well as slower-healing sores.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Vitamin E",
    descritpion:
      "Vitamin E is an antioxidant and anti-inflammatory that absorb the energy from UV light, which damages skin and leads to wrinkles, sagging, and skin cancer. It works with vitamin C to strengthen cell walls.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Zinc",
    descritpion:
      "Zinc helps your skin heal after an injury. It's needed to keep cell walls stable and for cells to divide and specialize as they grow. Zinc protect skin from UV damage  also acts like an antioxidant. Too little zinc can look like eczema, but the itchy rash won't get better when you put moisturizers and steroid creams on it.",
    quantity: 0,
    unit: "mg",
  },
  {
    title: "Selenium",
    descritpion:
      "Selenium is a mineral that helps certain antioxidants protect your skin from UV rays. Selenium deficiency has been linked with a greater chance of skin cancer.",
    quantity: 0,
    unit: "mg",
  },
];

export const PlanDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
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
              keep your skin healthy by nuturally reaching recommeded daily
              intake of certain nutrienrs that help protect your skin and keep
              it healthy
            </Text>
            <Text style={styles.title}>Nutritiens</Text>
            {data.map((item, key) => (
              <PlanNutritientItem
                key={key}
                title={item.title}
                unit={item.unit}
                quantity={item.quantity}
                description={item.descritpion}
              />
            ))}
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 5,
            padding: 10,
          }}
        >
          <BluredButton clicked={() => {}} txt={"Apply This Plan"} />
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
