import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { InvisibleInput, Loading } from "../../General";

interface Props {
  weight: number;
  height: number;
  onchange: (key: string, val: any | any[]) => void;
}

export const BodyMeasurements: React.FC<Props> = ({
  weight,
  height,
  onchange,
}) => {
  const [data, setData] = React.useState({
    weight: weight,
    height: height,
  });

  const handleData = (id: string, v: string) => {
    const parsed = parseInt(v);
    if (!parsed) return;
    console.log("changed : ", v);
    onchange(id, parsed);
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
