import React from "react";
import { Platform, Pressable, View, Text, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  pressed: () => void;
}

export const EnterFoodConfig: React.FC<Props> = ({ pressed }) => {
  return (
    <Pressable style={styles.container} onPress={() => pressed()}>
      <View style={styles.behindCircle} />
      <View style={styles.circle}>
        <Ionicons size={40} style={{opacity: .9, marginTop: 2, marginRight: -4, color: '#434343'}} name={'remove-outline'} />
      </View>
      <Text style={styles.txt}>Filters</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    height: 75,
    width: 75,
    paddingTop: 5,
  },
  circle: {
    backgroundColor: "#FFE8E8",
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    bottom: Platform.OS === "android" ? -1 : 0,
  },
  icon: {
    fontSize: 27,
  },
  txt: {
    marginTop: 5,
    fontSize: 13,
    fontWeight: "bold",
    //
  },
  behindCircle: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "#FFDFDF",
    position: "absolute",
    top: 0,
    display: 'none'
  },
});
