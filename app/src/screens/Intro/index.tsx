import React from "react";
import { ScrollView, View, StyleSheet, Text, Dimensions } from "react-native";
import { IntroSlider } from "../../components";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const sliders = [
  {
    title: "Eat Healthy",
    description: "Keep Record Of Taken Calorie and Nutrition",
    icon: "🍃",
  },

  {
    title: "What To Eat ?",
    description: "Find Delecious And Healthy Recipes ",
    icon: "🥘",
  },
  {
    title: "Walkout Healthy",
    description: "Keep a record of activities and burned calories",
    icon: "🎾",
  },
  {
    icon: "🥗",
    title: "Full Control",
    description:
      "Cotumize Your Food The Way You Want Using Filters To Execlude alergitic or unwanted recipes",
  },
];

export const Intro: React.FC<any> = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#fff", "#fbeaea"]}
      end={{ x: 1, y: 1 }}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }}>
        <ScrollView
          bounces={false}
          snapToInterval={width}
          //snapToOffsets={[0, width / 2]}
          showsHorizontalScrollIndicator={false}
          horizontal
          decelerationRate="fast"
        >
          {sliders.map((slider, key) => (
            <View style={{ width: width, height: height }} key={key}>
              <IntroSlider
                isLast={sliders.length - 1 === key}
                description={slider.description}
                title={slider.title}
                icon={slider.icon}
                register={() => navigation.push("register")}
                login={() => navigation.push("login")}
              />
            </View>
          ))}
        </ScrollView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    //flexGrow: 5,
    width: width,
    backgroundColor: "pink",
    height: height,
  },
});
