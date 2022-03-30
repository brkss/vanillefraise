import React from 'react';
import { View, StyleSheet, Text, SafeAreaView  } from 'react-native';
import { MealOptionsSelect, Button } from '../../components';

export const MealsOptions : React.FC<any> = ({route}) => {

  const { recipe } = route.params;
  console.log("Recipe ID : ", recipe);

  return(
     <View style={styles.container}>
      <View style={styles.incube}>
        <SafeAreaView>
        <Text style={styles.heading}>Meals</Text>
        <View>
          <MealOptionsSelect />
          <Button clicked={() => {}} txt={'ADD'} />
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
