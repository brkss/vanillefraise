import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

interface Props {
  next: () => void;
  previous: () => void;
  showNext: boolean;
  showPrevious: boolean;
}

export const NextButton: React.FC<Props> = ({
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
            style={[styles.container, { alignSelf: "flex-start", width: 140 }]}
            onPress={previous}
          >
            <Text style={[styles.txt, { textAlign: "left" }]}>PREVIOUS</Text>
          </Pressable>
        )}
      </View>
      <View style={styles.item}>
        {showNext && (
          <Pressable style={styles.container} onPress={next}>
            <Text style={styles.txt}>NEXT</Text>
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
