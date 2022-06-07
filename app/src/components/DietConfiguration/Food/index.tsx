import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { FoodItem } from "./Item";
import { NextButton } from "../NextButton";

interface Props {
  next: () => void;
}

const labels = [
  {
    name: "EGG FREE",
    id: "07a8483c-5a48-458f-b564-52d0ed6382e4",
  },
  {
    name: "LOW SUGAR",
    id: "2954ae8b-619f-4baf-86ba-6c5e62efd58e",
  },
  {
    name: "IMMUNO SUPPORTIVE",
    id: "5771c1fa-2965-4056-be18-0346458518ac",
  },
  {
    name: "WHEAT FREE",
    id: "57d9d520-1062-4450-9fe2-0639212d6171",
  },
  {
    name: "SESAME FREE",
    id: "654e0c4a-802c-4635-9fef-a9cd90edee44",
  },
];

export const ConfigureDietFood: React.FC<Props> = ({ next }) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const handleSelect = (id: string) => {
    const index = selected.findIndex((x) => x === id);
    if (index === -1) {
      setSelected([...selected, id]);
    } else {
      selected.splice(index, 1);
      setSelected([...selected]);
    }
  };

  const isSelected = (id: string) => {
    const index = selected.findIndex((x) => x == id);
    if (index > -1) return true;
    return false;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FOOD THAT FIT ?</Text>
      <Text style={styles.subtitle}>enjoy what you’re eating</Text>
      <ScrollView style={styles.items}>
        {labels.map((label, key) => (
          <FoodItem
            key={key}
            pressed={() => handleSelect(label.id)}
            selected={isSelected(label.id)}
            txt={label.name}
          />
        ))}
      </ScrollView>
      <NextButton pressed={next} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    opacity: 0.7,
    textAlign: "center",
  },
  items: {
    flex: 1,
  },
});
