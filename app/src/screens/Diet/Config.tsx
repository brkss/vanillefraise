import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import { StartDietConfiguration, ConfigureDietMacros, ConfigureDietFood } from "../../components";

const steps = ["START", "MACROS", "FOOD"];

export const DietConfiguration: React.FC = () => {
  const [step, setStep] = React.useState("START");

  const forward = () => {
    const index = steps.findIndex((x) => x === step);
    if (index > -1 && index + 1 < steps.length) {
      setStep(steps[index + 1]);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {
          {
            START: <StartDietConfiguration next={forward} />,
            MACROS: <ConfigureDietMacros next={forward} />,
            FOOD: <ConfigureDietFood next={forward} />
          }[step]
        }
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    padding: 10,
    flex: 1,
  },
});
