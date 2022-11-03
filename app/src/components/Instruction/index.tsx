import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Item } from "./Item";
import { LanguagePicker } from "../General";
import { translate_instructions } from "../../utils/modules/translate";

interface IInstruction {
  txt: string;
  index: number;
}

interface Props {
  instructions: any[];
}

export const Instructions: React.FC<Props> = ({ instructions }) => {
  const [fetching, setFetching] = React.useState(false);
  const [translated, setTranslated] = React.useState<IInstruction[]>([]);
  const [cache, setCache] = React.useState<{ [key: string]: IInstruction[] }>(
    {}
  );

  const handleLanguageChange = async (lang: string) => {
    if (lang === "en") {
      setTranslated([]);
      return;
    }
    if (cache[lang]) {
      setTranslated(cache[lang]);
      return;
    }
    setFetching(true);
    const res = await translate_instructions(
      lang,
      instructions.map((ins) => ({ txt: ins.raw, index: ins.index }))
    );
    setFetching(false);
    setCache({ ...cache, [lang]: res });
    setTranslated(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Instructions</Text>
      <LanguagePicker langChange={(lang) => handleLanguageChange(lang)} />
      {fetching && <Text style={styles.hint}>translating...</Text>}
      {translated.length === 0
        ? instructions.map((instruction, key) => (
            <Item index={instruction.index} txt={instruction.raw} key={key} />
          ))
        : translated.map((inst, key) => (
            <Item index={inst.index} txt={inst.txt} key={key} />
          ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  title: {
    fontSize: 25,
    marginBottom: 15,
    fontWeight: "bold",
  },
  hint: {
    fontFamily: "AvNextBold",
    fontWeight: "bold",
    marginBottom: 20,
  },
});
