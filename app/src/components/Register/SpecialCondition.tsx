import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { Button } from "../General/Button";
import { useSpecialConditionsQuery } from "../../generated/graphql";

interface Props {
  other: () => void;
}

export const RegisterSpecialCondition: React.FC<Props> = ({ other }) => {
  const { data, loading, error } = useSpecialConditionsQuery();
  const [selected, SetSelected] = React.useState<string[]>([]);

  const selectCondition = (id: string) => {
    console.log("Selected this condition : ", id);
    if (selected.includes(id)) {
      const index = selected.findIndex((x) => x == id);
      if (index != -1) selected.splice(index, 1);
      SetSelected([...selected]);
    } else {
      SetSelected([...selected, id]);
    }
  };

  if (loading || error) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Do you have any special conditions that require specific diets ?
      </Text>
      <View style={{ flex: 1, justifyContent: "center" }}>
        {data?.specialconditions.map((c, key) => (
          <Pressable
            onPress={() => selectCondition(c.id)}
            key={key}
            style={[
              styles.choise,
              {
                backgroundColor: selected.includes(c.id)
                  ? "#E3CEC1"
                  : "#F0DED3",
              },
            ]}
          >
            <Text style={styles.choiseText}>{c.name}</Text>
          </Pressable>
        ))}

        <Pressable onPress={() => other()} style={styles.choise}>
          <Text style={styles.choiseText}>Other</Text>
        </Pressable>
      </View>
      <Button txt={"Continue"} clicked={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 23,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    textAlign: "center",
    color: "#434343",
  },
  choise: {
    padding: 15,
    borderRadius: 13,
    backgroundColor: "#F0DED3",
    marginBottom: 22,
  },
  choiseText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    color: "#5A5A5A",
    marginBottom: 5,
  },
});
