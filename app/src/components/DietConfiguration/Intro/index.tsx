import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Close } from "../../General";

interface Props {
  navigation: any;
}

export const DietConfigurationIntro: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 10 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Close isRegister pressed={() => navigation.goBack()} />
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
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
});
