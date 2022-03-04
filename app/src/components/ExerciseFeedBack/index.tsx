import React from "react";
import { View, StyleSheet } from "react-native";
import { Item } from "./Item";

interface IFeedBack {
  id: string;
  name: string;
  icon: string;
}

interface Props {
  feedback: IFeedBack[];
  selected: string;
  onSelect: (id: string) => void;
}

export const ExerciseFeedBack: React.FC<Props> = ({selected, onSelect, feedback}) => {
  
  return (
    <View style={styles.container}>
      {
        feedback.map((fb, key) => (
       <View style={styles.item} key={key}>
         <Item onSelect={() => onSelect(fb.id)} selected={selected === fb.id} name={fb.name} icon={fb.icon} />
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
