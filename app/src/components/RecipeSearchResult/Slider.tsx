import React from "react";
import { Pressable, Text, ScrollView, StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

const filters = [
  {
    name: "By Name",
    id: "BY_NAME",
  },
  {
    name: "By Ingredient",
    id: "BY_INGREDIENTS",
  },
  {
    name: "By Nutritient",
    id: "BY_NUTRITIENTS",
  },
];

interface Props {
  select: (selected: string) => void;
}

export const RecipeSearchSlider: React.FC<Props> = ({ select }) => {
  const [selected, setSelected] = React.useState("BY_NAME");

  const handleSelect = (f: string) => {
    setSelected(f);
    select(f);
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {filters.map((filter, key) => (
        <Pressable
          key={key}
          style={[
            styles.item,
            { borderColor: selected == filter.id ? "#f5b3b3" : "transparent" },
          ]}
          onPress={() => handleSelect(filter.id)}
        >
          <Text style={styles.txt}>{filter.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
    marginVertical: 5,
    height: 45,
	marginBottom: 12,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    paddingHorizontal: 17,
    marginRight: 5,
    backgroundColor: "#FBECEC", 
    borderRadius: 100,
    height: 40,
	borderWidth: 2,
  },
  txt: {
    fontWeight: "bold",
  },
});
