import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import Ionicons from "react-native-vector-icons/Ionicons";
<Ionicons size={30} name={"ios-information-circle-sharp"} />;
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
          <Ionicons
            size={40}
            style={{ marginBottom: 10 }}
            name={"ios-information-circle-sharp"}
          />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginBottom: 10,
  },
  description: {
    fontSize: 15,
    textAlign: "center",
  },
});
