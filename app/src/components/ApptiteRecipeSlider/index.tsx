import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Item } from './Item';
import { useRecommendedRecipesQuery } from '../../generated/graphql';
import { Loading } from '../General'

const { width } = Dimensions.get('screen');

export const AppetiteRecipeSlider : React.FC = () => {

  const {data, loading, error } = useRecommendedRecipesQuery();


  if(loading || error)
    return <Loading />
    
  return (
    <View style={styles.container}>
      <ScrollView snapToInterval={width - (width * 0.2)} decelerationRate={'fast'} style={{marginTop: 30}} horizontal showsHorizontalScrollIndicator={false}>
        {
          data?.recommendedRecipes.map((item, key) => (
            <Item image={item.image} title={item.name} />
          ))
        }
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
