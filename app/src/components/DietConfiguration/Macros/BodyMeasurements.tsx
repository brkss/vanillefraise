import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput } from "../../General";

export const BodyMeasurements: React.FC = () => {
  const [data, setData] = React.useState({
    weight: 0,
    height: 0,
  });

  const handleData = (id: string, v: string) => {
    const parsed = parseInt(v);

    if (!parsed) return;
    setData({
      ...data,
      [id]: parseInt(v),
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.item}>
          <Text style={styles.label}>weight</Text>
          <InvisibleInput
            value={data.weight.toString() || ""}
            unit={"kg"}
            label={"weight"}
            txtChange={(v) => handleData("weight", v)}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.label}>height</Text>
          <InvisibleInput
            value={data.height.toString() || ""}
            unit={"cm"}
            label={"weight"}
            txtChange={(v) => handleData("height", v)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginTop: 40,
  },
  row: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
    paddingRight: 30,
  },
  label: {
    fontWeight: "bold",
  },
});
