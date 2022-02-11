import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { Start, IngredientStep, InstructionsStep } from "../../components";
import { useFonts } from "expo-font";

export const Cooking: React.FC = () => {
  const [step, SetStep] = React.useState("start");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const changeStep = (s: string) => {
    SetStep(s);
  };

  if (!helviticaCondensed) return <View />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {
          {
            start: <Start finish={() => changeStep("ingredients")} />,
            ingredients: (
              <IngredientStep finish={() => changeStep("instructions")} />
            ),
            instructions: <InstructionsStep />,
          }[step]
        }
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FBF0D3",
  },
});
