import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Navigation } from "../Navigation";
import { MealTime } from "./MealTime";
import { ReminderCheckBox } from "./ReminderCheckBox";

interface Props {
  next: () => void;
  previous: () => void;
  changed: (key: string, val: any | any[]) => void;
  meals: IMeal[];
}

interface IMeal {
  name: string;
  time: Date;
}

export const ConfigureMealSchedule: React.FC<Props> = ({
  next,
  previous,
  changed,
  meals: ms,
}) => {
  const [meals, setMeals] = React.useState<IMeal[]>(ms);

  const handleTime = (name: string, time: Date) => {
    const index = meals.findIndex((x) => x.name === name);
    let tmp: IMeal[] = meals;
    if (index == -1) {
      const o: IMeal = {
        name: name,
        time: time,
      };
      tmp = [...meals, o];
      setMeals([...meals, o]);
    } else {
      meals[index] = {
        name: name,
        time: time,
      };
      tmp[index] = meals[index];
      setMeals([...meals]);
    }
    changed("meals", tmp);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EATING SCHEDULE</Text>
      <Text style={styles.subtitle}>
        when you eat is just as important as what you eat
      </Text>
      <View style={styles.contentContainer}>
        {meals.map((meal, key) => (
          <MealTime
            key={key}
            onTimeChange={(n, t) => handleTime(n, t)}
            time={meal.time}
            name={meal.name}
          />
        ))}
        <ReminderCheckBox />
      </View>
      <Navigation nextBtnText={'SAVE'} previous={previous} next={next} showNext showPrevious />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.8,
    textAlign: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "space-evenly",
  },
});
