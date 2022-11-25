import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const TABS = ["INGREDIENTS", "INSTRUCTIONS", "NUTRITIONS"];

interface Props {
  selectTab: (tab: string) => void;
}

export const RecipesTabs: React.FC<Props> = ({ selectTab }) => {
  const [selected, setSelected] = React.useState(TABS[0]);

  const select = (tab: string) => {
    selectTab(tab);
    setSelected(tab);
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => select(TABS[0])}
        style={[
          styles.item,
          {
            //backgroundColor: selected === "INGREDIENTS" ? "#434343" : "#E5E1E1",
          },
        ]}
      >
        <Text
          style={[
            styles.txt,
            { opacity: selected === "INGREDIENTS" ? 1 : .5 },
          ]}
        >
          Ingredients
        </Text>
      </Pressable>
      <Pressable
        onPress={() => select(TABS[1])}
        style={[
          styles.item,
          {
            //backgroundColor:
              //selected === "INSTRUCTIONS" ? "#434343" : "#E5E1E1",
          },
        ]}
      >
        <Text
          style={[
            styles.txt,
            { opacity : selected === "INSTRUCTIONS" ? 1 : .5 },
          ]}
        >
          Instructions
        </Text>
      </Pressable>
      <Pressable
        onPress={() => select(TABS[2])}
        style={[
          styles.item,
          {
            display: 'none',
            //backgroundColor: selected === "NUTRITIONS" ? "#434343" : "#E5E1E1",
          },
        ]}
      >
        <Text
          style={[
            styles.txt,
            { color: selected === "NUTRITIONS" ? "white" : "#434343" },
          ]}
        >
          Nutritions
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginVertical: 10,
  },
  item: {
    margin: '1%',
    width: "48%",
    //paddingHorizontal: ,
    paddingVertical: 12,
    borderRadius: 10,
    //backgroundColor: "#E5E1E1",
  },
  txt: {
    fontFamily: "AvNextBold",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});

