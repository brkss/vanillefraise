import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { MacronutrientBar } from "./MacronutrientBar";
import { MacrosValuesOverview } from "./Values";
import { useMacrosQuery, useMeQuery } from "../../../generated/graphql";
import { Loading } from "../../General/Loading";

interface Props {
  refreshing: boolean;
}

export const DietMacrosOverview: React.FC<Props> = ({ refreshing }) => {
  const { data, loading, error, refetch } = useMacrosQuery();
  const _me = useMeQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
      _me.refetch();
    }
  }, [refreshing]);

  if (loading || error || _me.loading || _me.error) return <Loading />;

  return (
    <View style={styles.container}>
      <MacrosValuesOverview
        tdee={data.macros.tdee}
        weight={_me.data.me.weight}
      />
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
