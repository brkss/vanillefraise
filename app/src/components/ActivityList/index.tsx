import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import { Item } from "./Item";
import { useActivitiesQuery } from '../../generated/graphql';
import { Loading } from '../General';

const tmp = new Array(10).fill(0);

export const ActivityList: React.FC = () => {

  const { data, loading, error } = useActivitiesQuery();
  if(loading || error ) return <Loading />

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.row}>
          {data.activities.map((item, key) => (
            <View
              key={key}
              style={[
                styles.item,
                {
                  paddingRight: key % 2 === 0 ? 5 : 0,
                  paddingLeft: key % 2 === 0 ? 0 : 5,
                },
              ]}
            >
              <Item title={item.category.name} icon={item.category.icon} date={item.created_at} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
  row: {
    flexDirection: "row",
    alignContent: "center",
    width: "100%",
    flexWrap: "wrap",
  },
  item: {
    width: "50%",
    marginBottom: 10,
    //padding: 10
  },
});
