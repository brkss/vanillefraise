import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { languages } from "../../utils/data/languages.data";
import { useLanguagesQuery } from "../../generated/graphql";
import { Loading } from "../General/Loading";

interface Props {
  onSelect: (lang: string) => void;
  selected: string;
  isCooking?: boolean;
}

export const Languages: React.FC<Props> = ({
  onSelect,
  selected,
  isCooking,
}) => {
  const { data, error, loading } = useLanguagesQuery();

  if (loading || error) return <Loading />;

  return (
    <View style={styles.container}>
      {!isCooking && (
        <Text style={styles.title}>in more familiar langues ? (beta)</Text>
      )}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroller}
      >
        {data.languages.map((lang, key) => (
          <View>
            <View style={[styles.tag, { opacity: lang.id === "en" ? 1 : 0 }]}>
              <Text style={styles.tagText}>original</Text>
            </View>

            <Pressable
              onPress={() => onSelect(lang.id)}
              style={[
                styles.item,
                {
                  backgroundColor: selected === lang.id ? "#FFBABA" : "#FCDCDC",
                },
              ]}
              key={key}
            >
              <Text
                style={[
                  styles.txt,
                  { fontWeight: selected === lang.id ? "bold" : "700" },
                ]}
              >
                {lang.name}
              </Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
      <View style={styles.sign}>
        <Text style={styles.signText}>BETA</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //marginVertical: 10,
    marginTop: 0,
    //padding: 10,
    //backgroundColor: "#E9E9E9",
    //borderRadius: 7,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  sign: {
    backgroundColor: "#FFE3E3",
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderRadius: 7,
    marginTop: 4,
    display: "none",
  },
  signText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  scroller: {
    //backgroundColor: "red",
    //height: 40,
  },
  item: {
    paddingVertical: 7,
    paddingHorizontal: 20,
    backgroundColor: "#FCDCDC",
    marginRight: 10,
    borderRadius: 7,
    bottom: 0,
    //position: "absolute",
  },
  txt: {
    fontSize: 15,
    //fontWeight: "bold",
  },
  tag: {
    width: 50,
    //position: "absolute",
    backgroundColor: "orange",
    paddingVertical: 4,
    paddingHorizontal: 7,
    left: "50%",
    bottom: -7,
    zIndex: 999,
    borderRadius: 7,
  },
  tagText: {
    fontSize: 9,
    textAlign: "center",
  },
});
