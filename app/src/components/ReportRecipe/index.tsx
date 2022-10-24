import React from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import { useReportRecipeMutation } from "../../generated/graphql";

interface Props {
  recipeId: string;
}

export const ReportRecipe: React.FC<Props> = ({ recipeId }) => {
  const [report] = useReportRecipeMutation();

  const handleReport = () => {
    Alert.alert("Report Recipe", "Is something wrong with this recipe ?", [
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "Yes, Report This",
        onPress: () => {
          report({
            variables: {
              recipe_id: recipeId,
            },
          }).then((res) => {
            let msg = "";
            if (res.errors || !res.data) {
              msg = "Recipe successfuly reported, Thank you !";
            } else {
              msg = res.data.reportRecipe.message;
            }
            Alert.alert("Recipe Report", msg);
          });
        },
        style: "default",
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Help make Vanille Fraise better.</Text>
      <Text style={styles.subtitle}>
        if you see missing ingredients, unclear instructions or something is off
        let me know by reporting this recipe. Thank you !
      </Text>
      <Pressable onPress={handleReport} style={styles.btn}>
        <Text style={styles.btnText}>Report This Recipe.</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    paddingTop: 45,
    borderTopColor: "#DEDEDE",
    borderTopWidth: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    fontFamily: "AvNextBold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
  },
  btn: {
    marginTop: 20,
    borderRadius: 15,
    padding: 25,
    backgroundColor: "#FFE3E3",
  },
  btnText: {
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "AvNextBold",
    fontSize: 17,
    color: "#434343",
  },
});
