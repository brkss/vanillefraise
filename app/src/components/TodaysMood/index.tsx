import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item } from "./Item";
import { useMoodsQuery } from "../../generated/graphql";
import { Loading, Button } from "../General";
import { useCreateMoodRecordMutation } from "../../generated/graphql";

interface Props {
  triggerAlert: (msg: string) => void;
}

export const TodaysMood: React.FC<Props> = ({ triggerAlert }) => {
  const [selected, SetSelected] = React.useState<string[]>([]);
  const { data, loading, error } = useMoodsQuery();
  const [save] = useCreateMoodRecordMutation();

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

  const saveRecord = () => {
    if (selected.length == 0) return;
    save({
      variables: {
        moods: selected,
      },
    })
      .then((res) => {
        if (res.data.createMoodRecord.status) {
          SetSelected([]);
          triggerAlert(
            res.data.createMoodRecord.message || "Record Created Successfuly"
          );
        }
        console.log("res creating mood record => ", res);
      })
      .catch((e) => {
        triggerAlert("Something went wrong !");
        console.log("Something went wrong creating mood record : ", e);
      });
  };

  if (loading || !data || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How you feeling today ?</Text>
      <Text style={styles.subtitle}>
        Mood Records help you understand your everyday behavior.
      </Text>
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
        <Button txt={"That's it"} clicked={() => saveRecord()} />
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
  subtitle: {
    fontSize: 13,
    fontWeight: "300",
    opacity: 0.8,
    marginTop: 5,
  },
});
