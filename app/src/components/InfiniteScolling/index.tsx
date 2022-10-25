import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";

const data = [
  {
    txt: "1",
  },
  {
    txt: "2",
  },
  {
    txt: "3",
  },
  {
    txt: "4",
  },
  {
    txt: "5",
  },
  {
    txt: "6",
  },
];

const isCloseToBottom = ({ layoutMeasurement, contentOffset, contentSize }) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement.height + contentOffset.y >=
    contentSize.height - paddingToBottom
  );
};

export const InfiniteScrolling: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
      bounces={false}
        onScroll={({ nativeEvent }) => {
          if (isCloseToBottom(nativeEvent)) console.log("reached the bottom !");
        }}
        scrollEventThrottle={400}
      >
        {data.map((i, key) => (
          <View
            key={key}
            style={{
              height: 300,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>{i.txt}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //
  },
});
