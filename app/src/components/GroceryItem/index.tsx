import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

interface Props {
  clicked: () => void;
  scratched?: boolean;
  title: string;
  amount: number;
  unit: string;
}

export const GroceryItem: React.FC<Props> = ({
  clicked,
  scratched,
  title,
  unit,
  amount,
}) => {
  return (
    <Pressable
      style={[styles.container, { opacity: scratched ? 0.5 : 1 }]}
      onPress={clicked}
    >
      <View style={styles.row}>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={[
              styles.title,
              { textDecorationLine: scratched ? "line-through" : "none" },
            ]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.product,
              { textDecorationLine: scratched ? "line-through" : "none" },
            ]}
          >
            _
          </Text>
        </View>
        <View style={{ justifyContent: "center" }}>
          <Text
            style={[
              styles.quantity,
              { textDecorationLine: scratched ? "line-through" : "none" },
            ]}
          >
            {amount === 0 ? "" : amount} {unit}
          </Text>
          <Text
            style={[
              styles.total,
              { textDecorationLine: scratched ? "line-through" : "none" },
            ]}
          >
            _
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: "#ECE8E8",
    marginBottom: 15,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 7,
  },
  title: {
    fontSize: 21,
    color: "#434343",
    fontFamily: "AvNextBold",
    marginBottom: 7,
  },
  product: {
    display: "none",
    fontFamily: "AvNextBold",
    color: "#434343",
  },
  quantity: {
    marginBottom: 5,
    fontSize: 15,
    color: "#434343",
    fontFamily: "AvNextBold",
    textAlign: "right",
    opacity: 0.8,
  },
  total: {
    display: "none",
    fontFamily: "AvNextBold",
    color: "#434343",
    textAlign: "right",
  },
});
