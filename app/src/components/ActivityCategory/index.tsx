import React from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import { Item } from "./Item";
import { activity_types } from "../../utils/data/ActivityTypes.data";

interface Props {
  choosed: () => void;
}

export const ActivityCategory: React.FC<Props> = ({ choosed }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {activity_types.map((type, key) => (
          <View key={key} style={styles.item}>
            <Item
              choosed={() => choosed()}
              title={type.title}
              icon={type.icon}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  row: {
    //backgroundColor: "red",
    //flex: 1,
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  item: {
    width: "33%",
    alignItems: "center",
    marginTop: 20,
  },
});
