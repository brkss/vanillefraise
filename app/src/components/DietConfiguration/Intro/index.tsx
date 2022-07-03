import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Close } from "../../General";
import { InfoItem } from "./InfoItem";

const tmp = [
  {
    title: "Calories",
    subtitle: "Track Your Calorie Intake  to gain or lose weight.",
    icon: "✨",
  },
  {
    title: "Food",
    subtitle: "Schedule and set reminders for your meals.",
    icon: "🍴",
  },
  {
    title: "Weight",
    subtitle: "Track Your Calorie Intake  to gain or lose weight.",
    icon: "👁",
  },
  {
    title: "Meal Time",
    subtitle: "Schedule and set reminders for your meals.",
    icon: "⏰",
  },
];

interface Props {
  navigation: any;
}

export const DietConfigurationIntro: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Close isRegister pressed={() => navigation.goBack()} />
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <View>
            <Text style={styles.title}>Flexible{"\n"}Diet</Text>
            {tmp.map((item, key) => (
              <InfoItem
                key={key}
                icon={item.icon}
                subtitle={item.subtitle}
                title={item.title}
              />
            ))}
          </View>
          <Pressable
            onPress={() => navigation.push("DietConfiguration")}
            style={styles.config}
          >
            <Text style={styles.configText}>CONFIGURE YOUR DIET !</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  config: {
    backgroundColor: "#FFD9D9",
    padding: 15,
    paddingHorizontal: 25,
    borderRadius: 14,
  },
  configText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#434343",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    width: "100%",
    marginBottom: 20,
  },
});
