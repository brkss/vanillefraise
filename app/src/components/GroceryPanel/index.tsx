import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { useGroceryCountQuery } from "../../generated/graphql";
import { Loading } from "../General";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withDelay,
  withTiming,
} from "react-native-reanimated";

interface Props {
  view: () => void;
  refreshing: boolean;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export const GroceryOverviewPanel: React.FC<Props> = ({ view, refreshing }) => {
  const { data, loading, error, refetch } = useGroceryCountQuery();

  const scale = useSharedValue(0);
  const opacity = useSharedValue(0);

  const boxStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  const txtStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  React.useEffect(() => {
    if (refreshing) {
      console.log("refetching !");
      refetch();
    }
    scale.value = withDelay(100, withTiming(1, { duration: 500 }));
    opacity.value = withDelay(600, withTiming(1, { duration: 400 }));
    opacity.value = withDelay(600, withTiming(1, { duration: 400 }));
  }, [refreshing]);

  if (loading || error) {
    return <Loading />;
  }

  return (
    <AnimatedPressable style={[styles.container, boxStyle]} onPress={view}>
      <View style={styles.row}>
        <View style={{ flexDirection: "row" }}>
          <Animated.View style={[styles.circle]}>
            <Animated.Text style={[styles.circleText, txtStyle]}>
              {data.groceryCount || 0}
            </Animated.Text>
          </Animated.View>
          <View style={styles.info}>
            <Animated.Text style={[styles.title, txtStyle]}>
              Grocery List
            </Animated.Text>
            <Animated.Text style={[styles.date, txtStyle]}>
              next 7 days
            </Animated.Text>
          </View>
        </View>
        <View style={styles.price}>
          <Text style={styles.total}>_</Text>
        </View>
      </View>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingVertical: 15,
    backgroundColor: "#f7f8ff" ,
    borderRadius: 14,
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  circle: {
    height: 40,
    width: 40,
    backgroundColor: "#e6e9ff",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  circleText: {
    fontSize: 17,
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    marginBottom: -2,
    marginRight: -2,
  },
  info: {
    justifyContent: "center",
  },
  title: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    fontSize: 17,
    color: "#434343",
    //marginBottom: 5,
  },
  date: {
    opacity: 0.8,
    fontSize: 14,
    //display: "none",
  },
  price: {
    alignSelf: "flex-end",
  },
  total: {
    fontWeight: "bold",
    fontFamily: "AvNextBold",
    fontSize: 17,
    color: "#434343",
  },
});
