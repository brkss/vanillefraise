import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import { useActiveFoodFiltersQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

interface Props {
  refreshing: boolean;
}

export const ActiveFoodFilters: React.FC<Props> = ({ refreshing }) => {
  const { data, loading, error, refetch } = useActiveFoodFiltersQuery();

  React.useEffect(() => {
    if (refreshing) {
      refetch();
    }
  }, [refreshing]);

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Active Food Filters</Text>
      {data.activeFoodFilters.length === 0 && (
        <View style={styles.nofilters}>
          <Text style={{ fontWeight: "bold", textAlign: "center" }}>
            Great No Filters ! 😋
          </Text>
        </View>
      )}

      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}
        horizontal
      >
        {data.activeFoodFilters.map((item, key) => (
          <View key={key} style={styles.item}>
            <Text style={styles.itemText}>{item.label}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  label: {
    fontWeight: "bold",
    fontSize: 20,
  },
  item: {
    padding: 6,
    paddingHorizontal: 10,
    backgroundColor: "#FFCDCD",
    marginRight: 10,
    borderRadius: 7,
  },
  itemText: {
    fontWeight: "bold",
    color: "#434343",
  },
  nofilters: {
    padding: 15,
    borderRadius: 13,
    marginTop: 10,
    backgroundColor: "#ECEAEA",
  },
});
