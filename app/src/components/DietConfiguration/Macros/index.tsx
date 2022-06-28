import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { DailyActivity } from "./DailyActivity";
import { BodyMeasurements } from "./BodyMeasurements";
import { MacrosValues } from "./MacrosValues";
import { Macronutrients } from "./Macronutrients";
import { NextButton } from "../NextButton";
import { calculateREE, calculateTDEE } from "../../../utils/modules/macros";
import { getAge } from "../../../utils/modules/bmr";

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
  weight: w,
  height: h,
  gender,
  birth,
}) => {
  const [ree, setRee] = React.useState(0);
  const [tdee, setTdee] = React.useState(0);
  const [factor, setFactor] = React.useState(factorval);
  const [weight, setWeight] = React.useState(w);
  const [height, setHeight] = React.useState(h);

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

  const handleBodyMeasurementsChange = (key: string, val: any | any[]) => {
    changeMacros(factor);
    changed(key, val);
    if (key === "weight") setWeight(val);
    else if (key === "height") setHeight(val);
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
          onchange={(key, val) => handleBodyMeasurementsChange(key, val)}
          weight={weight}
          height={height}
        />
        <MacrosValues
          key={tdee}
          ree={calculateREE(gender, weight, height, getAge(birth))}
          tdee={calculateTDEE(
            factor,
            calculateREE(gender, weight, height, getAge(birth))
          )}
        />
        {/*<Macronutrients />*/}
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
    //marginTop: 10,
  },
  contentContainer: {
    flex: 1,
    //backgroundColor: "red",
    //alignItems: "stretch",
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
