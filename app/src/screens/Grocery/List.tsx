import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
//import { SafeAreaView } from "react-native-safe-area-context";
import { GroceryItem, Loading, LanguagePicker } from "../../components";
import { useGroceryQuery } from "../../generated/graphql";
import { translate_ingredients } from "../../utils/modules/translate";

interface IIngredient {
  unit: string;
  txt: string;
  amount: number;
}

export const GroceryList: React.FC = () => {
  const [scratched, setScratched] = React.useState<string[]>([]);
  const { data, loading, error } = useGroceryQuery();
  const [translated, setTranslated] = React.useState<IIngredient[]>([]);
  const [cache, setCache] = React.useState<IIngredient[]>([]);
  const [transling, setTranslating] = React.useState<boolean>(false);

  const isScratched = (id: string): boolean => {
    const index = scratched.findIndex((x) => x === id);
    return index === -1 ? false : true;
  };

  const handleScratchItem = (id: string) => {
    const index = scratched.findIndex((x) => x === id);
    if (index === -1) {
      setScratched([...scratched, id]);
    } else {
      const tmp = [...scratched];
      tmp.splice(index, 1);
      setScratched([...tmp]);
    }
  };

  const handleLangChange = async (lang: string) => {
    if (lang === "en") {
      setTranslated([]);
      return;
    }
    if (cache[lang]) {
      setTranslated(cache[lang]);
      return;
    }
    setTranslating(true);
    const res = await translate_ingredients(
      lang,
      data.grocery.map((i) => ({
        txt: i.ingredients,
        unit: i.unit,
        amount: i.amount,
      }))
    );
    setTranslating(false);
    setTranslated(res);
    setCache({ ...cache, [lang]: res });
  };

  if (loading || error) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grocery List</Text>

      <LanguagePicker langChange={(l) => handleLangChange(l)} />
      {transling && (
        <Text
          style={{
            fontFamily: "AvNextBold",
            marginTop: -10,
            marginBottom: 10,
            marginLeft: 5,
          }}
        >
          please wait ...
        </Text>
      )}
      <ScrollView>
        {translated.length === 0 ? data.grocery.map((item, key) => (
          <GroceryItem
            key={key}
            clicked={() => handleScratchItem(item.id)}
            scratched={isScratched(item.id)}
            unit={item.unit}
            amount={item.amount}
            title={item.ingredients}
          />
            )): 
          translated.map((item, key) => (
        <GroceryItem
            key={key}
            clicked={() => handleScratchItem(data.grocery[key].id)}
            scratched={isScratched(data.grocery[key].id)}
            unit={item.unit}
            amount={item.amount}
            title={item.txt}
          />
            ))
          }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 25,
  },
  title: {
    fontFamily: "AvNextBold",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#434343",
  },
});
