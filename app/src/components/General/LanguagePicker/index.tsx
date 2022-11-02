import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { LanguageItem } from "./Item";

const _langs = [
  {
    txt: "English",
    id: "en",
  },
  {
    txt: "French",
    id: "fr",
  },
  {
    txt: "Arabic",
    id: "ar",
  },
  {
    txt: "Spanish",
    id: "es",
  },
];

interface Props {
  langChange: (lang: string) => void;
}

export const LanguagePicker: React.FC<Props> = ({ langChange }) => {
  const [selected, setSelected] = React.useState(0);

  const handleSelecting = (index: number) => {
    setSelected(index);
    langChange(_langs[index].id);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        {_langs.map((lang, key) => (
          <LanguageItem
            id={lang.id}
            txt={lang.txt}
            key={key}
            selected={key == selected}
            onSelect={() => handleSelecting(key)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
});
