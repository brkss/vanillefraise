import React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { diet_record_types } from "../../utils/data/dietrecordstypes.data";

interface Props {
  onselect: (index: number) => void;
  selected: number;
}

export const DietRecordTypes: React.FC<Props> = ({ onselect, selected }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
    >
      {diet_record_types.map((item, key) => (
        <Pressable
          onPress={() => onselect(key)}
          style={[
            styles.item,
            { backgroundColor: selected === key ? "#F6B1B1" : "#FFD9D9" },
          ]}
          key={key}
        >
          <Text style={styles.txt}>{item.name}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  item: {
    padding: 7,
    paddingHorizontal: 13,
    backgroundColor: "#FFD9D9",
    marginRight: 10,
    borderRadius: 10,
  },
  txt: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
