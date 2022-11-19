import React from "react";
import { View, StyleSheet } from "react-native";
import {
  Start,
  IngredientStep,
  InstructionsStep,
  FinishStep,
  Loading,
} from "../../components";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  useRecipeQuery,
  useCookedRecipeMutation,
  UserCaloriesQuery,
  UserCaloriesDocument,
  TranslatedIngredient,
} from "../../generated/graphql";
import { SafeAreaView } from "react-native-safe-area-context";

export const Cooking: React.FC<any> = ({ route, navigation }) => {
  const [cooked] = useCookedRecipeMutation();
  const [targetServing, SetTargetServing] = React.useState(1);
  const { id, mealId } = route.params;
  const { data, loading, error } = useRecipeQuery({
    fetchPolicy: "cache-first",
    variables: {
      id: id,
    },
    onCompleted: (res) => {
      if (res.recipe.status) {
        SetTargetServing(res.recipe.recipe.serving);
      }
    },
  });
  const [step, SetStep] = React.useState("start");

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

  if (loading || error || !data) return <Loading />;

  return (
    <View style={styles.container}>
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
                  servings={data!.recipe.recipe.serving}
                  total={data!.recipe.recipe!.total || "unknown"}
                  name={data!.recipe.recipe!.name}
                  onServingChange={(n) => SetTargetServing(n)}
                  finish={() => changeStep("ingredients")}
                />
              ),
              ingredients: (
                <IngredientStep
                  originalServings={data!.recipe.recipe.serving}
                  servings={targetServing}
                  ingredients={
                    data!.recipe.ingredients as TranslatedIngredient[]
                  }
                  finish={() => changeStep("instructions")}
                />
              ),
              instructions: (
                <InstructionsStep
                  title={data.recipe.recipe.name}
                  navigation={navigation}
                  instructions={data!.recipe.instructions.sort(
                    ({ index: a }, { index: b }) => a - b
                  )}
                  finish={() => finish()}
                  restart={() => changeStep("start")}
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
    </View>
  );
};
//"#FDF3F3", "#FFDADA"
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#FDF3F3",
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
