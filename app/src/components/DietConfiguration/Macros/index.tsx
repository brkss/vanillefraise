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
  previous: () => void;
  next: () => void;
  changed: (key: string, val: any | any[]) => void;
  weight: number;
  height: number;
  factorval: number;
  birth: any;
  gender: string;
}

export const ConfigureDietMacros: React.FC<Props> = ({
  next,
  previous,
  changed,
  factorval,
  weight,
  height,
  gender,
  birth,
}) => {
  /*
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
   */
  const [ree, setRee] = React.useState(0);
  const [tdee, setTdee] = React.useState(0);
  const [factor, setFactor] = React.useState(factorval);

  React.useEffect(() => {
    const _ree = calculateREE(gender, weight, height, getAge(birth));
    setRee(_ree);
    setTdee(calculateTDEE(factor, ree));
  }, []);

  const changeMacros = (f: number) => {
    const _ree = calculateREE(gender, weight, height, getAge(birth));
    setRee(_ree);
    setTdee(calculateTDEE(factor, ree));
  };

  const handleFactor = (f: number) => {
    changed("factor", f);
    setFactor(f);
    changeMacros(f);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}> MACROS </Text>
      <View style={styles.contentContainer}>
        <DailyActivity factor={factorval} onSelect={(f) => handleFactor(f)} />
        <BodyMeasurements
          onchange={(key, val) => changed(key, val)}
          weight={weight}
          height={height}
        />
        <MacrosValues key={tdee} ree={ree} tdee={calculateTDEE(factor, ree)} />
        <Macronutrients />
      </View>
      <NextButton next={next} previous={previous} showNext showPrevious />
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
    justifyContent: "space-evenly",
    marginBottom: 15,
  },
});
