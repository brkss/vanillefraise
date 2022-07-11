import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
<Ionicons name={"arrow-next-outline"} />;
interface Props {
  next: () => void;
  previous: () => void;
  showNext: boolean;
  showPrevious: boolean;
}

export const Navigation: React.FC<Props> = ({
  next,
  previous,
  showNext,
  showPrevious,
}) => {
  return (
    <View style={styles.row}>
      <View style={[styles.item]}>
        {showPrevious && (
          <Pressable
            style={[styles.container, { alignSelf: "flex-start", width: 160 }]}
            onPress={previous}
          >
            <Text style={[styles.txt, { textAlign: "left" }]}>
              <Ionicons size={18} name={"arrow-back-outline"} /> PREVIOUS
            </Text>
          </Pressable>
        )}
      </View>
      <View style={styles.item}>
        {showNext && (
          <Pressable style={styles.container} onPress={next}>
            <Text style={styles.txt}>
              NEXT{" "}
              <Ionicons
                size={18}
                style={{ marginBottom: -25, marginRight: 5 }}
                name={"arrow-forward-outline"}
              />
            </Text>
          </Pressable>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 120,
    backgroundColor: "#363636",
    borderRadius: 50,
    alignSelf: "flex-end",
    padding: 10,
    paddingHorizontal: 20,
  },
  txt: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    width: "50%",
  },
});
