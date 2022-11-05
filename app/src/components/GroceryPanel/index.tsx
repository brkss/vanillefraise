import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useGroceryCountQuery } from "../../generated/graphql";
import { Loading } from "../General";

interface Props {
  view: () => void;
  refreshing: boolean;
}

export const GroceryOverviewPanel: React.FC<Props> = ({ view, refreshing }) => {
  const { data, loading, error, refetch } = useGroceryCountQuery();

  React.useEffect(() => {
    if (refreshing) {
      console.log("refetching !");
      refetch();
    }
  }, [refreshing]);

  if (loading || error) {
    return <Loading />;
  }

  return (
    <Pressable style={styles.container} onPress={view}>
      <View style={styles.row}>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.circle}>
            <Text style={styles.circleText}>{data.groceryCount || 0}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.title}>Grocery List</Text>
            <Text style={styles.date}>next 7 days</Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.total}>_</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "#ECE8E8",
    borderRadius: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#f2dfdf",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circleText: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    marginBottom: -2,
    marginRight: -2,
  },
  info: {
    justifyContent: "center",
  },
  title: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
    color: "#434343",
    //marginBottom: 5,
  },
  date: {
    opacity: 0.8,
    fontSize: 14,
    //display: "none",
  },
  price: {
    alignSelf: "flex-end",
  },
  total: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 17,
    color: "#434343",
  },
});
