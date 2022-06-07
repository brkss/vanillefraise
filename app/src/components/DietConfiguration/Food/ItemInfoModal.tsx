import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";

interface Props {
  isVisible: boolean;
  title?: string;
  description?: string;
  closed: () => void;
}

export const ItemInfoModal: React.FC<Props> = ({
  isVisible,
  description,
  title,
  closed,
}) => {
  return (
    <Modal
      testID={"modal"}
      isVisible={isVisible}
      onSwipeComplete={closed}
      useNativeDriverForBackdrop
      swipeDirection={["down"]}
      style={{ margin: 0, justifyContent: "flex-end" }}
    >
      <View>
        <View style={styles.container}>
          <Text>I am the modal content!</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)",
    bottom: 0,
    minHeight: 300,
  },
});
