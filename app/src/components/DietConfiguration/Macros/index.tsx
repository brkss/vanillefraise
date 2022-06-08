import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DailyActivity } from "./DailyActivity";
import { BodyMeasurements } from "./BodyMeasurements";
import { MacrosValues } from "./MacrosValues";
import { Macronutrients } from "./Macronutrients";
import { NextButton } from "../NextButton";
import { calculateREE, calculateTDEE } from "../../../utils/modules/macros";
import { useMeQuery } from "../../../generated/graphql";
import { Loading } from "../../../components";
import { getAge } from "../../../utils/modules/bmr";
import { activity_factors } from "../../../utils/data/activityFactors";

interface Props {
  next: () => void;
}

export const ConfigureDietMacros: React.FC<Props> = ({ next }) => {
  const { data, loading, error } = useMeQuery({
    onCompleted: (res) => {
      if (res.me) {
        const { gender, weight, height, birth } = res.me;
        const _ree = calculateREE(gender, weight, height, getAge(birth));
        setRee(_ree);
        setTdee(calculateTDEE(factor, ree));
      }
    },
  });
  const [ree, setRee] = React.useState(0);
  const [tdee, setTdee] = React.useState(0);
  const [factor, setFactor] = React.useState(activity_factors[0].factor);

  const changeMacros = (f: number) => {
    const { gender, weight, height, birth } = data.me;
    const _ree = calculateREE(gender, weight, height, getAge(birth));
    setRee(_ree);
    setTdee(calculateTDEE(factor, ree));
  };

  const handleFactor = (f: number) => {
    setFactor(f);
    changeMacros(f);
  };

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> MACROS </Text>
      <View style={styles.contentContainer}>
        <DailyActivity onSelect={(f) => handleFactor(f)} />
        <BodyMeasurements weight={data.me.weight} height={data.me.height} />
        <MacrosValues ree={ree} tdee={tdee} />
        <Macronutrients />
      </View>
      <NextButton pressed={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "red",
    //alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
