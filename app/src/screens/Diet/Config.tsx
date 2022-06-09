import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import {
  StartDietConfiguration,
  ConfigureDietMacros,
  ConfigureDietFood,
  ConfigureMealSchedule,
  DietAnalyse,
} from "../../components";

const steps = ["START", "MACROS", "FOOD", "SCHEDULE", "ANALYSE"];

export const DietConfiguration: React.FC = () => {
  const [step, setStep] = React.useState("START");
  const [data, setData] = React.useState({
    weight: 0,
    height: 0,
    factor: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    filters: [],
    meals: [],
    reminder: true,
  });

  const changed = (key: string, val: any | any[]) => {
    setData({
      ...data,
      [key]: val,
    });
  };

  const forward = () => {
    console.log("data ++++>>>> ", data);
    const index = steps.findIndex((x) => x === step);
    if (index > -1 && index + 1 < steps.length) {
      setStep(steps[index + 1]);
    }
  };

  const backward = () => {
    const index = steps.findIndex((x) => x === step);
    if (index > -1 && index - 1 >= 0) {
      setStep(steps[index - 1]);
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {
          {
            START: <StartDietConfiguration next={forward} />,
            MACROS: (
              <ConfigureDietMacros
                changed={(key: string, val: any | any[]) => changed(key, val)}
                previous={backward}
                next={forward}
              />
            ),
            FOOD: (
              <ConfigureDietFood
                changed={(key, val) => changed(key, val)}
                previous={backward}
                next={forward}
              />
            ),
            SCHEDULE: (
              <ConfigureMealSchedule previous={backward} next={forward} />
            ),
            ANALYSE: <DietAnalyse previous={backward} />,
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
