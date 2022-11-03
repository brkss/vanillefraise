import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import { GroceryItem, Loading } from "../../components";
import { useGroceryQuery } from "../../generated/graphql";

const _tmp = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const GroceryList: React.FC = () => {
  const [scratched, setScratched] = React.useState<string[]>([]);
  const { data, loading, error } = useGroceryQuery();

  const isScratched = (id: string): boolean => {
    const index = scratched.findIndex((x) => x === id);
    return index === -1 ? false : true;
  };

  const handleScratchItem = (id: string) => {
    const index = scratched.findIndex((x) => x === id);
    if (index === -1) {
      setScratched([...scratched, id]);
    } else {
      const tmp = [...scratched];
      tmp.splice(index, 1);
      setScratched([...tmp]);
    }
  };

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>
      <ScrollView>
        {data.grocery.map((item, key) => (
          <GroceryItem
            key={key}
            clicked={() => handleScratchItem(item.id)}
            scratched={isScratched(item.id)}
            unit={item.unit}
            amount={item.amount}
            title={item.ingredients}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#434343",
  },
});
