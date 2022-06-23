import React from "react";
import { View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { Item } from "./Item";
import { useActivityCategoriesQuery } from "../../generated/graphql";

interface Props {
  choosed: (catid: string, name: string) => void;
}

export const ActivityCategory: React.FC<Props> = ({ choosed }) => {
  const { data, loading, error } = useActivityCategoriesQuery();

  if (loading && !error)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={"small"} />
      </View>
    );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {data?.activityCategories.map((type, key) => (
            <View key={key} style={styles.item}>
              <Item
                choosed={() => choosed(type.id, type.name)}
                title={type.name}
                icon={type.icon || "?"}
              />
            </View>
          ))}
        </View>
        <View style={{ height: 200 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  row: {
    //backgroundColor: "red",
    //flex: 1,
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  item: {
    width: "33%",
    alignItems: "center",
    marginTop: 20,
  },
});
