import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { MentalIntroCircle } from "../../components/MentalHealth";
import { useFonts } from "expo-font";
import { Button, Loading } from "../../components";
import { circles } from "../../utils/data/mentalintro.data";
import {
  useIsRequestedQuery,
  useRequestEarlyAccessMutation,
} from "../../generated/graphql";
import { SafeAreaView } from "react-native-safe-area-context";

const { width: w, height: h } = Dimensions.get("window");

export const MentalHealthIntro: React.FC = () => {
  const [request] = useRequestEarlyAccessMutation();
  const { data, loading, error, refetch } = useIsRequestedQuery({
    variables: {
      service: "MENTAL_HEALTH",
    },
  });
  const [helviticaCondensed] = useFonts({
    "helvitica-condesed": require("../../assets/helvitica-condensed.otf"),
  });
  if (loading || error || !helviticaCondensed) return <Loading />;

  const handleReuquest = () => {
    if (data.isRequested) return;
    request({
      variables: {
        service: "MENTAL_HEALTH",
      },
    })
      .then((res) => {
        refetch({
          service: "MENTAL_HEALTH",
        });
      })
      .catch((e) => {
        console.log("Something went wrong ! ", e);
      });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Improve{"\n"}Your{"\n"}Mental{"\n"}Health.
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          {circles.map((c, key) => (
            <MentalIntroCircle
              d={c.d}
              x={w * c.x}
              y={h * c.y}
              key={key}
              duration={c.duration}
              icon={c.icon}
            />
          ))}
        </View>
        <Button
          bg={data.isRequested ? "#B5D498" : "#323232"}
          color={data.isRequested ? "#323232" : "white"}
          clicked={() => handleReuquest()}
          txt={
            data.isRequested
              ? "You're in the waiting list"
              : "Signup For Early Access"
          }
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "#272727",
    padding: 15,
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#939393",
    borderRadius: 40,
  },
  headerContainer: {},
  header: {
    fontSize: 50,
    lineHeight: 50,
    fontWeight: "bold",
    color: "white",
    fontFamily: "helvitica-condesed",
  },
});
