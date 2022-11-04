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
      style={[styles.container, { opacity: scratched ? 0.3 : 1 }]}
      onPress={clicked}
    >
      <View style={styles.row}>
        <View>
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
        <View>
          <Text
            style={[
              styles.quantity,
              { textDecorationLine: scratched ? "line-through" : "none" },
            ]}
          >
            {amount} {unit}
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
    marginBottom: 10,
    borderRadius: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 21,
    color: "#434343",
    fontFamily: "AvNextBold",
    marginBottom: 7,
  },
  product: {
    fontFamily: "AvNextBold",
    color: "#434343",
  },
  quantity: {
    marginBottom: 5,
    fontSize: 17,
    color: "#434343",
    fontFamily: "AvNextBold",
    textAlign: "right",
  },
  total: {
    fontFamily: "AvNextBold",
    color: "#434343",
    textAlign: "right",
  },
});
