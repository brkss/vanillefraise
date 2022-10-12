import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Pressable,
} from "react-native";
import {
  Heading,
  NutritionPlanThumbnail,
  NutritionPlanInfoModal,
  Loading,
} from "../../components/";
import { usePlansQuery } from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";

export const NutritionPlans: React.FC<any> = ({ navigation }) => {
  const [visible, setVisible] = React.useState(false);
  const { data, error, loading } = usePlansQuery();

  const info = () => {
    setVisible(true);
  };

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.heading}>
            <Pressable onPress={() => info()}>
              <Heading title={"Nutrition Plans"} />
              <Text style={styles.infoTitle}>What is this ?</Text>
            </Pressable>
          </View>
          {data.plans.map((item, key) => (
            <NutritionPlanThumbnail
              clicked={() =>
                navigation.navigate("PlanDetails", { planId: item.id })
              }
              key={key}
              image={`${CDN}/${item.image}`}
              title={item.title}
            />
          ))}
          {/*<Text style={styles.description}>
          Nutrition plans help you improve specific health related with
          nutrition such as (focus, memory, hair health, skin health ect..),
          When you apply selected plan it automaticlly track the nutrients with
          the given recomendation !{" "}
          </Text>*/}
        </ScrollView>
        <NutritionPlanInfoModal
          closed={() => setVisible(false)}
          isVisible={visible}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    padding: 10,
  },
  description: {
    fontFamily: "AvNext",
    //fontWeight: "bold",
    fontSize: 15,
    lineHeight: 17,
    marginTop: -5,
    //textAlign: "justify",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: -10,
    fontFamily: "AvNextBold",
    color: "#434343",
  },
});
