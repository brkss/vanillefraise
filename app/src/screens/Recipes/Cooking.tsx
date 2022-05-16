import React from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import {
  Start,
  IngredientStep,
  InstructionsStep,
  FinishStep,
  Loading,
} from "../../components";
import { useFonts } from "expo-font";
import AntDesign from "react-native-vector-icons/AntDesign";
import { colors } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
import {
  useRecipeQuery,
  useCookedRecipeMutation,
  UserCaloriesQuery,
  UserCaloriesDocument,
} from "../../generated/graphql";

export const Cooking: React.FC<any> = ({ route, navigation }) => {
  const [cooked] = useCookedRecipeMutation();
  const { id, mealId } = route.params;
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
  });
  const [step, SetStep] = React.useState("start");
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });

  const changeStep = (s: string) => {
    SetStep(s);
  };
  const finish = () => {
    cooked({
      variables: {
        recipeID: id,
        mealId: mealId,
      },
      update: (store, { data }) => {
        if (!data.cookedRecipe.status) return;
        const caloriesData = store.readQuery<UserCaloriesQuery>({
          query: UserCaloriesDocument,
        }).userCalories;
        console.log("UPDATE THAT SHIT");
        store.writeQuery<UserCaloriesQuery>({
          query: UserCaloriesDocument,
          data: {
            userCalories: {
              value: caloriesData.value + data.cookedRecipe.calories,
              status: caloriesData.status,
              burnt: caloriesData.burnt,
              message: caloriesData.message,
              target: caloriesData.target,
              __typename: caloriesData.__typename,
            },
          },
        });
      },
    })
      .then((res) => {
        if (!res.errors || res.data.cookedRecipe.status === true) {
          navigation.goBack();
        }
      })
      .catch((e) => {
        console.log("Sonething went wrong => ", e);
      });
  };

  if (!helviticaCondensed || loading || error || !data) return <Loading />;

  return (
    <LinearGradient colors={["#D5BDAF", "#F5EBE0"]} style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.top}>
          <AntDesign
            name={"closecircle"}
            onPress={() => navigation.goBack()}
            size={33}
            style={{ opacity: 0.7 }}
          />
        </View>

        <View style={styles.content}>
          {
            {
              start: (
                <Start
                  total={data!.recipe.recipe!.total || "unknown"}
                  name={data!.recipe.recipe!.name}
                  finish={() => changeStep("ingredients")}
                />
              ),
              ingredients: (
                <IngredientStep
                  ingredients={data!.recipe.recipe!.ingredients}
                  finish={() => changeStep("instructions")}
                />
              ),
              instructions: (
                <InstructionsStep
                  instructions={data!.recipe.recipe!.instructions.sort(
                    ({ index: a }, { index: b }) => a - b
                  )}
                  finish={() => changeStep("finish")}
                />
              ),
              finish: (
                <FinishStep
                  restart={() => changeStep("start")}
                  finish={() => finish()}
                />
              ),
            }[step]
          }
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.c2,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  top: {
    flexDirection: "row-reverse",
    flexWrap: "nowrap",
  },
  cancelBtn: {
    backgroundColor: "#4A4848",
    padding: 8,
    borderRadius: 7,
    minWidth: 100,
  },
  cancelBtnText: {
    color: "white",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
});
