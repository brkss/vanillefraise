import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { colors } from "../../../utils/colors";
import {
  GetActivityCaloriesQuery,
  useGetActivityCaloriesQuery,
} from "../../../generated/graphql";
import { Loading } from "../../General/Loading";

interface Props {
  start: () => void;
  activity: string;
  category: string;
}

export const ActivityConfigNow: React.FC<Props> = ({
  start,
  activity,
  category,
}) => {
  const { data, loading, error } = useGetActivityCaloriesQuery({
    variables: {
      id: category,
    },
  });

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.info}>You played {activity}</Text>
      <Text style={styles.subinfo}>
        Add record after finishing your exercise !
      </Text>
      <Text style={styles.calories}>{data.getActivityCalories} Cal</Text>
      <Pressable style={styles.btn} onPress={() => start()}>
        <Text style={styles.btnText}>Record</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    textAlign: "center",
  },
  calories: {
    fontSize: 27,
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    marginTop: 20,
  },
  btn: {
    height: 150,
    width: 150,
    backgroundColor: colors.c4,
    borderRadius: 150,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  btnText: {
    fontWeight: "bold",
    fontFamily: "helvitica-condesed",
    fontSize: 32,
    marginBottom: 5,
  },
  subinfo: {
    fontSize: 16,
    color: "#434343",
    opacity: 0.9,
    marginTop: 8,
  },
});
