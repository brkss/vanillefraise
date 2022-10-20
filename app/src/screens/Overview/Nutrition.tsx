import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  RefreshControl,
} from "react-native";
import {
  NutritionIntakeChart,
  NutritionCategoryItems,
  //Loading,
} from "../../components";
import { SafeAreaView } from "react-native-safe-area-context";

const wait = (timeout: number) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const NutritionOverview: React.FC<any> = ({ route }) => {
  const { cat_id, cat_name } = route.params;
  const [selected, setSelected] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [refresh, setRefresh] = React.useState(false);
  const [unit, setUnit] = React.useState("");

  const onRefresh = () => {
    setRefresh(true);
    wait(2000).then((_) => {
      setRefresh(false);
    });
  };

  const handleSelect = (_id: string, _title: string, _unit: string) => {
    setSelected(_id);
    setTitle(_title);
    setUnit(_unit);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <Text style={styles.title}>{cat_name}</Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          refreshControl={
            <RefreshControl refreshing={refresh} onRefresh={onRefresh} />
          }
        >
          {selected.length > 0 && title.length > 0 && (
            <NutritionIntakeChart
              refreshing={refresh}
              code={selected}
              title={title}
              unit={unit}
            />
          )}
          <NutritionCategoryItems
            refreshing={refresh}
            select={(id, title, unit) => handleSelect(id, title, unit)}
            cat_id={cat_id}
          />
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
    fontSize: 30,
    fontWeight: "bold",
  },
});
