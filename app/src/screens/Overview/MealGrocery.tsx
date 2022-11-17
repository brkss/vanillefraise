import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { MealGrocery } from "../../components";

export const MealGroceryScreen: React.FC<any> = ({ route }) => {
  const { ingredients, mealName, date } = route.params;

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={styles.title}>
          {mealName}
          </Text>
        <Text style={styles.date}>{date}</Text>
        </View>
        <ScrollView>
          <MealGrocery ingredients={ingredients} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 25,
    color: "#434343",
    padding: 5,
    marginVertical: 10,
  },
  date: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 18,
    color: "#434343",
    padding: 5,
    marginVertical: 10,
    opacity: .8
  },
});
