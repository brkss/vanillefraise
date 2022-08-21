import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { useFonts } from "expo-font";

interface Props {
  txt: string;
  color?: string;
  bg?: string;
  clicked: () => void;
}

export const Button: React.FC<Props> = ({ txt, clicked, color, bg }) => {
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  if (!helviticaCondensed)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading..</Text>
      </View>
    );

  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: bg ? bg : "#323232" }]}
      onPress={() => clicked()}
    >
      <Text style={[styles.txt, { color: color ? color : "white" }]}>
        {txt}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#323232",
    width: "100%",
    marginTop: 10,
    padding: 10,
    borderRadius: 13,
  },
  txt: {
    textAlign: "center",
    color: "white",
    //fontFamily: "helvitica-condesed",
    fontSize: 20,
    fontWeight: "bold",
    //marginBottom: 5,
  },
});
