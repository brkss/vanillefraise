import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ConfigureDietFood, Loading } from "../../components";
import {
  ActiveFoodFiltersDocument,
  ActiveFoodFiltersQuery,
  useActiveFoodFiltersQuery,
  useSaveFoodFiltersMutation,
} from "../../generated/graphql";

export const FoodFilters: React.FC<any> = ({ navigation }) => {
  const [save] = useSaveFoodFiltersMutation();
  const [changed, setChanged] = React.useState(false);
  const [selected, setSelected] = React.useState<string[]>([]);
  const { data, error, loading } = useActiveFoodFiltersQuery({
    onCompleted: (res) => {
      if (res.activeFoodFilters.length > 0)
        setSelected(res.activeFoodFilters.map((item) => item.id));
    },
  });

  if (error || loading) return <Loading />;

  const handleChange = (val: string[]) => {
    setChanged(true);
    setSelected(val);
    console.log("food filters changed : ", val);
  };
  const handleSave = () => {
    save({
      variables: {
        filters: selected,
      },
      update: (store, { data }) => {
        store.writeQuery<ActiveFoodFiltersQuery>({
          query: ActiveFoodFiltersDocument,
          data: {
            activeFoodFilters: [...data.saveFoodFilters],
          },
        });
      },
    }).then((_) => {
      navigation.goBack();
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ConfigureDietFood
          changed={(_, v) => handleChange(v)}
          next={() => {}}
          preselected={data.activeFoodFilters.map((item) => item.id)}
          previous={() => {}}
          hidenavigation
        />
        {changed && (
          <Pressable onPress={handleSave} style={styles.btn}>
            <Text style={styles.btnText}>SAVE</Text>
          </Pressable>
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  btn: {
    backgroundColor: "#434343",
    padding: 15,
    borderRadius: 15,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
});
