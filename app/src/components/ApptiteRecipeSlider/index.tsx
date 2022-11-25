import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { Item } from './Item';
import { useRecommendedRecipesQuery } from '../../generated/graphql';
import { Loading } from '../General'
import { SomethingElse } from './SomethingElse';

const { width } = Dimensions.get('screen');

interface Props {
  clicked: (id: string) => void;
}

export const AppetiteRecipeSlider : React.FC<Props> = ({clicked}) => {

  const {data, loading, error, refetch } = useRecommendedRecipesQuery();

  const scrollRef = React.useRef<any>(null);


  const handleReload = () => {
    refetch().then(_ => {
      scrollRef.current?.scrollTo({x: 0, animated: true});
    })
  }

  if(loading || error)
    return <Loading />
    
  return (
    <View style={styles.container}>
      <ScrollView ref={scrollRef} snapToInterval={width - (width * 0.2)} decelerationRate={'fast'} style={{marginTop: 30}} horizontal showsHorizontalScrollIndicator={false}>
        {
          data?.recommendedRecipes.map((item, key) => (
            <Item key={key}  clicked={() => clicked(item.id)} image={item.image} title={item.name} />
          ))
        }
        <SomethingElse reload={handleReload} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
