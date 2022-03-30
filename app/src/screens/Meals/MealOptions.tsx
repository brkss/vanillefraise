import React from 'react';
import { View, StyleSheet, Text, SafeAreaView  } from 'react-native';
import { MealOptionsSelect, Button } from '../../components';
import { useAddMealRecipeMutation } from '../../generated/graphql';

export const MealsOptions : React.FC<any> = ({route, navigation}) => {

  const [add] = useAddMealRecipeMutation();
  const [meal, setMeal] = React.useState('');
  const { recipe } = route.params;
  console.log("Recipe ID : ", recipe);

  const save = () => {

    if(!recipe || !meal){
      // error
      return;
    }
    add({
      variables: {
        meal: meal,
        recipe: recipe
      }
    }).then(res => {

      if(res.data.addMealRecipe.status){
        navigation.goBack();
      }else{
        console.log(res.data.addMealRecipe.message || "ERROR ADDING RECIPE TO MEAL");
      }


    }).catch(e => {
      console.log("Something went wrong adding recipe to meal => ", e);
    });


  }

  return(
     <View style={styles.container}>
      <View style={styles.incube}>
        <SafeAreaView>
        <Text style={styles.heading}>Meals</Text>
        <View>
          <MealOptionsSelect select={(id) => setMeal(id)} />
          <Button clicked={() => save()} txt={'ADD'} />
        </View>
    </SafeAreaView>
      </View>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-end",
  },
  incube: {
    height: "50%",
    width: "100%",
    padding: 15,
    backgroundColor: "#D8D8D8",
    borderRadius: 20,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 33,
    lineHeight: 37,
    color: "#3C3C3D",
  },
});
