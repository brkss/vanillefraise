import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import {
  NewPlanNutritionSlider,
  EditPlanNutrition,
  BluredButton,
} from "../../components";

export const CreateNewPlan: React.FC = () => {
  const [show, setShow] = React.useState(false);

  const handleEditElement = () => {
    setShow(true);
  };
  <BluredButton clicked={() => {}} txt={"Create"} />;
  const handleClose = () => {
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1, padding: 10 }}>
        <View style={{ padding: 10 }}>
          <Text style={styles.title}>Create New Plan</Text>
          <View style={{ height: 15 }} />
          <ScrollView showsVerticalScrollIndicator={false}>
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
            <NewPlanNutritionSlider edit={(id) => handleEditElement()} />
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
      <EditPlanNutrition close={handleClose} show={show} />
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
