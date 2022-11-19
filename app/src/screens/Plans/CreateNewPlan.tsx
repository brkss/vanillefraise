import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  NewPlanNutritionSlider,
  EditPlanNutrition,
  BluredButton,
  Loading,
} from "../../components";
import { useNutritionsByCategoryQuery } from "../../generated/graphql";

export const CreateNewPlan: React.FC = () => {
  const [show, setShow] = React.useState(false);
  const { data, loading, error } = useNutritionsByCategoryQuery();
  const [selectedNutrition, setSelectedNutrition] = React.useState({
    value: -1,
    unit: "",
    name: "",
  });

  const handleClose = () => {
    setShow(false);
  };

  const handlePassEditNutrtion = (id: string, items: any[]) => {
    const item = items.find((x) => x.nutrition.id === id);
    if (item) {
      setSelectedNutrition({
        value: item.recommendation,
        unit: item.nutrition.unit,
        name: item.nutrition.name,
      });
      setShow(true);
    }
  };

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>Create New Plan</Text>
          <View style={{ height: 15 }} />
          <ScrollView showsVerticalScrollIndicator={false}>
            {data.nutritionsByCategory.map((item, key) => (
              <NewPlanNutritionSlider
                category={item.category}
                nutritions={item.items}
                edit={(id) => handlePassEditNutrtion(id, item.items)}
                key={key}
              />
            ))}
            <View style={{ height: 100 }} />
          </ScrollView>
        </View>
        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 0,
            //backgroundColor: "red",
            padding: 10,
          }}
        >
          <BluredButton clicked={() => {}} txt={"Create"} />
        </View>
      </SafeAreaView>
      <EditPlanNutrition
        name={selectedNutrition.name}
        changed={(val) => {}}
        unit={selectedNutrition.unit}
        value={selectedNutrition.value}
        close={handleClose}
        show={show}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#434343",
    fontFamily: "AvNextBold",
  },
});
