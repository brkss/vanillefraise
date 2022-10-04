import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Button } from "../General/Button";
import { IGender } from "../../utils/types/Register";

interface Props {
  pass: (data: IGender) => void;
}

export const RegisterGender: React.FC<Props> = ({ pass }) => {
  const [selected, setSelected] = React.useState("MALE");
  const saveData = () => {
    const data: IGender = { gender: selected === "MALE" ? selected : "FEMALE" };
    pass(data);
  };

  return (
    <View style={styles.container}>
	<Text style={styles.title}>Gender</Text>
      <Pressable
        onPress={() => setSelected("MALE")}
        style={[
          styles.choice,
          { borderColor: selected == "MALE" ? "#f5b3b3" : "transparent" },
        ]}
      >
        <Text style={styles.choisetxt}>🙋‍♂️ Male</Text>
      </Pressable>
      <Pressable
        onPress={() => setSelected("FEMALE")}
        style={[
          styles.choice,
          { borderColor: selected == "FEMALE" ? "#f5b3b3" : "transparent" },
        ]}
      >
        <Text style={styles.choisetxt}>🙋‍♀️ Female</Text>
      </Pressable>
	  <Pressable
        onPress={() => setSelected("OTHER")}
        style={[
          styles.choice,
          { borderColor: selected == "OTHER" ? "#f5b3b3" : "transparent" },
        ]}
      >
        <Text style={styles.choisetxt}>✨ Other</Text>
      </Pressable>
      <Button txt={"NEXT"} clicked={() => saveData()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title:{
	fontSize: 30,
	fontWeight: "bold",
	fontFamily: "AvNextBold",
	textAlign: "left",
	alignSelf: "flex-start",
	marginBottom: 20
},
choice: {
    width: "100%",
    padding: 20,
    backgroundColor: "#FBECEC",
    marginBottom: 20,
    borderRadius: 13,
    //borderStyle: "dashed",
    borderColor: "transparent",
    borderWidth: 3,
  },
  choisetxt: {
    textAlign: "center",
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 20,
  },
});
