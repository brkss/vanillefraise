import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useMoodsQuery } from "../../../generated/graphql";
import { Loading } from "../../General/Loading";

export const MoodStats: React.FC = () => {
  const [moods, SetMoods] = React.useState<any[][]>([[]]);
  const { data, loading, error } = useMoodsQuery({
    onCompleted: (res) => {
      if (res.moods.length > 0) {
        const m = [[]];
        for (let i = 0; i < res.moods.length; i += 5) {
          m.push(res.moods.slice(i, i + 5));
        }
        SetMoods(m);
        console.log("moods chunks => ", m);
      }
    },
  });

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      {moods.map((chunk, key) => (
        <View style={styles.row}>
          {chunk.map((mood, key) => (
            <View key={key} style={styles.item}>
              <Text>{mood.name}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
  },
  item: {
    width: "20%",
  },
});
