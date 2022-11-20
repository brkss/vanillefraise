import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  PlanTrackElement,
  BluredButton,
  NutritionPlanAlert,
  InvisibleInput,
  Input,
} from "../../components";
<View style={{ height: 100 }} />;
interface IAltredNutrition {
  id: string;
  name: string;
  value: number;
  unit: string;
  recommended: number;
}

export const FinishCreatePlan: React.FC<any> = ({ route }) => {
  const { elements } = route.params as { elements: IAltredNutrition[] };

  console.log("elements : ", elements);

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Tracked Elements</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <NutritionPlanAlert />
          <View style={{ marginVertical: 18, borderWidth: 1, opacity: 0.1 }} />
          <Input onChange={(v) => {}} label={"Give your plan a title"} />
          <View style={{ height: 18 }} />
          {elements.map((elm, key) => (
            <PlanTrackElement
              key={key}
              unit={elm.unit}
              value={elm.value}
              name={elm.name}
            />
          ))}
          <View style={{ height: 100 }} />
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 10,
            width: "100%",
          }}
        >
          <BluredButton clicked={() => {}} txt={"Save"} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    marginBottom: 20,
  },
});
