import React from "react";
import { SafeAreaView, View, Text, StyleSheet, Button } from "react-native";
import {
  StartDietConfiguration,
  ConfigureDietMacros,
  ConfigureDietFood,
  ConfigureMealSchedule,
  DietAnalyse,
  Loading,
} from '../../components';
import { activity_factors } from "../../utils/data/activityFactors";
import { useMeQuery } from "../../generated/graphql";

const steps = ["START", "MACROS", "FOOD", "SCHEDULE", "ANALYSE"];

export const DietConfiguration: React.FC = () => {
  const _me = useMeQuery({
    onCompleted: (res) => {
      setData({
        ...data,
        weight: _me.data.me.weight,
        height: _me.data.me.height,
      });
    },
  });
  const [step, setStep] = React.useState("START");
  const [data, setData] = React.useState({
    weight: 0,
    height: 0,
    factor: activity_factors[0].factor,
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

  if (_me.loading || _me.error) return <Loading />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        {
          {
            START: <StartDietConfiguration next={forward} />,
            MACROS: (
              <ConfigureDietMacros
                height={_me.data.me.height}
                weight={_me.data.me.weight}
                birth={_me.data.me.birth}
                gender={_me.data.me.gender}
                factorval={data.factor}
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
              <ConfigureMealSchedule
                changed={(k, v) => changed(k, v)}
                previous={backward}
                next={forward}
              />
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
