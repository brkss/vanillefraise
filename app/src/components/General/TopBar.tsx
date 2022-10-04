import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AddDietRecordButton } from "./AddDietRecord";
import { EnterDietButton } from "./EnterDietButton";
import { EnterFoodConfig } from './EnterFoodConfig';

interface Props {
  navigation: any;
}

export const TopBar: React.FC<Props> = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ width: "50%", alignItems: "baseline" }}>
          <Text style={styles.title}>Vanille{"\n"}Fraise</Text>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            width: "50%",
            alignSelf: "flex-end",
          }}
        >
          <AddDietRecordButton
            pressed={() => navigation.push("CreateDietRecord")}
          />
          <EnterDietButton pressed={() => navigation.push("DietOverview")} />
          <EnterFoodConfig  pressed={() => navigation.push("DietFoodFilters")} />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 10,
    //alignItems: "baseline",
    paddingBottom: 0,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#434343",
	fontFamily: "AvNextBold"
    //display: "none",
    //backgroundColor: "red",
  },
});
