import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import { Heading, PlanNutritientItem, BluredButton, Loading } from "../../components";
import { usePlanDetailsQuery } from '../../generated/graphql';
import { CDN } from '../../utils/config/defaults';

export const PlanDetails: React.FC<any> = ({route}) => {

  const { planId } = route.params;
  const { data, loading, error } = usePlanDetailsQuery({variables: {id: planId}});

  if(loading || error ) return <Loading />

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.content}>
            <Heading title={data.planDetails.title} />
          </View>
          <Image
            resizeMode={"cover"}
            style={styles.image}
            source={{uri: `${CDN}/${data.planDetails.image}`}}
          />
          <View style={styles.content}>
            <Text style={styles.description}>
              {data.planDetails.description}
            </Text>
            <Text style={styles.title}>Nutritiens</Text>
            {data.planDetails.nutrients.map((item, key) => (
              <PlanNutritientItem
                key={key}
                title={item.title}
                unit={item.unit}
                quantity={item.quantity}
                description={item.description}
              />
            ))}
          </View>
          <View style={{ height: 100 }} />
        </ScrollView>
        <View
          style={{
            position: "absolute",
            width: "100%",
            bottom: 5,
            padding: 10,
          }}
        >
          <BluredButton clicked={() => {}} txt={"Apply This Plan"} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  content: {
    padding: 10,
  },
  description: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 20,
    color: "#434343",
    fontFamily: "AvNextBold",
  },
  image: {
    height: 200,
    width: "100%",
  },
  title: {
    fontSize: 30,
    fontFamily: "AvNextBold",
    color: "#434343",
    marginTop: 20,
    marginBottom: 10,
  },
});
