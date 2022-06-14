import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MacronutrientBar } from "./MacronutrientBar";
import { MacrosValuesOverview } from "./Values";
import { useMacrosQuery } from '../../../generated/graphql'
import { Loading } from '../../General/Loading';

export const DietMacrosOverview: React.FC = () => {

  const { data, loading, error } = useMacrosQuery();

  if(loading || error) return <Loading />

  return (
    <View style={styles.container}>
      <MacrosValuesOverview tdee={data.macros.tdee} />
      <View style={styles.macronutrients}>
        <View style={styles.line} />
        <MacronutrientBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  macronutrients: {
    marginBottom: 10,
  },
  title: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 7,
  },
  line: {
    borderTopColor: "#434343",
    borderTopWidth: 1,
    marginBottom: 15,
    opacity: 0.7,
  },
});
