import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

interface Props {
  isVisible: boolean;
  closed: () => void;
}

export const DietRecord: React.FC<Props> = ({ isVisible, closed }) => {
  console.log("shooooow !");
  return (
    <Modal
      isVisible={isVisible}
      onSwipeComplete={closed}
      useNativeDriverForBackdrop
      swipeDirection={["down"]}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Create Record</Text>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 14,
    bottom: 0,
    minHeight: 300,
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
  },
});
