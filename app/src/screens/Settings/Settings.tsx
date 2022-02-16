import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "../../components";
import { useSeedActivityCategoriesMutation } from "../../generated/graphql";

export const Settings: React.FC = () => {
  const [seed] = useSeedActivityCategoriesMutation();

  const createCategories = () => {
    seed()
      .then((res) => {
        console.log("seed result => ", res);
      })
      .catch((e) => {
        console.log("Something went wrong creating categories => ", e);
      });
  };

  return (
    <View style={styles.container}>
      <Text>Settings</Text>
      <View>
        <Button txt={"seed categories"} clicked={() => createCategories()} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
