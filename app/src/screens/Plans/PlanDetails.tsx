import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  ScrollView,
} from "react-native";
import {
  Heading,
  PlanNutritientItem,
  BluredButton,
  Loading,
  NutritionPlanStatusModal,
} from "../../components";
import {
  PlanDetailsDocument,
  PlanDetailsQuery,
  usePlanDetailsQuery,
} from "../../generated/graphql";
import { CDN } from "../../utils/config/defaults";
import Moment from "moment";
import { useTogglePlanTrackingMutation } from "../../generated/graphql";

export const PlanDetails: React.FC<any> = ({ route }) => {
  const [visible, setVisible] = React.useState(false);
  const [toggle] = useTogglePlanTrackingMutation();
  const [active, setActive] = React.useState(false);
  const { planId } = route.params;
  const { data, loading, error } = usePlanDetailsQuery({
    variables: { id: planId },
    fetchPolicy: "network-only",
    onCompleted: (res) => {
      setActive(res.planDetails.active);
    },
  });

  if (loading || error) return <Loading />;

  const handleTogglePlanTracking = (planId: string) => {
    if (!planId) return;
    toggle({
      variables: {
        id: planId,
      },
    })
      .then((res) => {
        if (res.data.togglePlanTracking.status)
          setActive(res.data.togglePlanTracking.current);
      })
      .catch((e) => {
        console.log("something went wrong toggling plan tracking : ", e);
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.content}>
            <Heading title={data.planDetails.name} />
          </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          
          <Image
            resizeMode={"cover"}
            style={styles.image}
            source={{
              uri: `${CDN}/${data.planDetails.image}`,
            }}
          />
          <View style={styles.content}>
            {!data.planDetails.public && (
              <View
                style={{
                  marginTop: 16,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={styles.badge}>Created By You </Text>
                <Text style={styles.date}>
                  {Moment(data.planDetails.created_at).format("DD/MM/YYYY")}
                </Text>
              </View>
            )}
            <Text
              style={[
                styles.badge,
                {
                  color: active ? "green" : "orange",
                  marginTop: 10,
                  textAlign: "right",
                },
              ]}
            >
              {active ? "Active Tracking" : "Inactive Tracking"}
            </Text>
            {data.planDetails.description ? (
              <Text style={styles.description}>
                data.planDetails.description
              </Text>
            ) : null}
            <Text style={styles.title}>Nutritiens</Text>
            {data.planDetails.trackedElements.map((item, key) => (
              <PlanNutritientItem
                key={key}
                title={item.nutriton.name}
                unit={item.nutriton.unit}
                quantity={item.quantity}
                //description={item.description || ""}
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
          <BluredButton
            clicked={() => handleTogglePlanTracking(data.planDetails.id)}
            txt={`${!active ? "Apply" : "Disable"} This Plan`}
          />
        </View>
      </SafeAreaView>
      <NutritionPlanStatusModal
        closed={() => setVisible(false)}
        isVisible={visible}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //paddingTop: 20,
  },
  content: {
    paddingTop: 15,
    paddingHorizontal: 10,
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
  badge: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
    //marginTop: 15,
    opacity: 0.7,
  },
  date: {
    opacity: 0.8,
    fontSize: 17,
    fontFamily: "AvNextBold",
    fontWeight: "bold",
  },
});
