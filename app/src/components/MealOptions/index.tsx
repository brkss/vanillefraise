import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Option } from "./Item";
import { useMealsQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

interface Props {
  select: (id: string) => void;
}

export const MealOptionsSelect: React.FC<Props> = ({select}) => {
  const [selected, SetSelected] = React.useState('');
  const { data, loading, error } = useMealsQuery();
  if (loading || error) {
    return <Loading />;
  }

  const handleSelect = (id: string) => {
    select(id);
    SetSelected(id);
  }

  return (
    <View style={styles.container}>
      {data.meals.map((meal, key) => (
        <Option
          pressed={() => handleSelect(meal.id)}
          selected={selected == meal.id}
          key={key}
          txt={meal.name.toUpperCase()}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
