import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item } from "./Item";
import { useMoodsQuery } from "../../generated/graphql";
import { Loading, Button } from "../General";

export const TodaysMood: React.FC = () => {
  const [selected, SetSelected] = React.useState<string[]>([]);
  const { data, loading, error } = useMoodsQuery();

  const handleSelection = (id: string) => {
    console.log("SELECTED : ", id);
    const index = selected.findIndex((x) => x == id);
    if (index != -1) {
      selected.splice(index, 1);
      SetSelected([...selected]);
    } else {
      selected.push(id);
      SetSelected([...selected]);
    }
  };

  if (loading || !data || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How you feeling today ?</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
      >
        {data.moods.map((mood, key) => (
          <Item
            onSelect={() => handleSelection(mood.id)}
            isSelected={selected.includes(mood.id)}
            name={mood.name}
            icon={mood.icon}
            key={key}
          />
        ))}
      </ScrollView>
      {selected.length > 0 ? (
        <Button txt={"That's it"} clicked={() => {}} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //padding: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  list: {
    //
    marginTop: 20,
    marginBottom: 15,
  },
});
