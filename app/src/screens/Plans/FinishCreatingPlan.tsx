import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  PlanTrackElement,
  BluredButton,
  NutritionPlanAlert,
  InvisibleInput,
  Input,
  Error,
} from "../../components";
import {
  PlansDocument,
  PlansQuery,
  useCreatePlanMutation,
} from "../../generated/graphql";

interface IAltredNutrition {
  id: string;
  name: string;
  value: number;
  unit: string;
  recommended: number;
}

export const FinishCreatePlan: React.FC<any> = ({ route, navigation }) => {
  const [error, setError] = React.useState("");
  const { elements } = route.params as { elements: IAltredNutrition[] };
  const [name, setName] = React.useState("");
  const [create] = useCreatePlanMutation();

  const handleCreatePlan = () => {
    if(name.length == 0){
      setError("Make sure you give it a name !");
      return;
    }
    if(name.length > 25){
      setError("Name too long !");
      return;
    }
    const data = elements.map((elm) => ({
      nutrition_id: elm.id,
      quantity: elm.value,
    }));

    create({
      variables: {
        name: name,
        elements: data,
      },
      update: (store, { data }) => {
        if (!data || !data.createPlan.status || !data.createPlan.plan)
          return null;
        const plans =
          store.readQuery<PlansQuery>({
            query: PlansDocument,
          }).plans || [];
        const newPlan = data.createPlan.plan;
        console.log("UPDATE THAT SHIT!");
        store.writeQuery<PlansQuery>({
          query: PlansDocument,
          data: {
            plans: [newPlan, ...plans],
          },
        });
      },
    })
      .then((res) => {
        if (res.data.createPlan.status) {
          navigation.navigate("PlansList");
        } else if (res.errors || !res.data.createPlan.status) {
          setError(res.data.createPlan.message || "Something went wrong");
        }
      })
      .catch((e) => {
        setError("Something went wrong !");
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>Tracked Elements</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          {error ? <Error txt={error} close={() => setError("")} /> : null}
          <NutritionPlanAlert />
          <View style={{ marginVertical: 18, borderWidth: 1, opacity: 0.1 }} />
          <Input
            onChange={(v) => setName(v)}
            label={"Give your plan a title"}
          />
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
          <BluredButton clicked={() => handleCreatePlan()} txt={"Save"} />
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
