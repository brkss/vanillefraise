import React from "react";
import { View, StyleSheet } from "react-native";
import { Item } from "./Item";

const feedback = [
  {
    id: "1",
    name: "Low",
    icon: "😴"
  },
  {
    id: "2",
    name: "Normal",
    icon: "👌"
  },
  {
    id: "3",
    name: "Intense",
    icon: "🥵"
  },
  {
    id: "4",
    name: "Strong",
    icon: "🔥"
  }
]

export const ExerciseFeedBack: React.FC = () => {
  const [selected, SetSelected] = React.useState(feedback[1].id)
  return (
    <View style={styles.container}>
      {
        feedback.map((fb, key) => (
       <View style={styles.item} key={key}>
         <Item onSelect={() => SetSelected(fb.id)} selected={selected === fb.id} name={fb.name} icon={fb.icon} />
      </View>
   
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  item: {
    width: "25%",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
