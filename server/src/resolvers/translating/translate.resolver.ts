import { ObjectType, Query, Resolver } from "type-graphql";
import axios from "axios";
import { Translated } from "../../entity/Translate/Translated";
import { target_languages } from "../../utils/data/translate/refrence";
import { LanguagesResponse } from '../../utils/responses'

@Resolver()
export class TranlatingResolver {

  @Query(() => [LanguagesResponse])
  async languages() : Promise<LanguagesResponse[]> {


    return [
      {
        name: "English",
        id: "en",
      },
      {
        name: "French",
        id: "fr",
      },
      {
        name: "Arabic",
        id: "ar"
      },
      {
        name: "Spanish",
        id: "es"
      }
    ]

  }


  async translateAll(txt: string, type: string, pointer: string) {
    for (let lang of target_languages) {
      await this.translate(txt, type, lang, pointer);
    }
  }

  //@Mutation(() => Boolean)
  async translate(
    //@Arg("data") { txt, type, target, pointer }: TranslateInput
    txt: string,
    type: string,
    target: string,
    pointer: string
  ): Promise<boolean> {
    try {
      const res = await axios({
        method: "POST",
        url: "https://translate.argosopentech.com/translate",
        data: new URLSearchParams({
          q: txt,
          source: "en",
          target: target,
        }),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      });
      if (res.status !== 200 || !res.data.translatedText) return false;
      const translated = new Translated();
      translated.type = type;
      translated.txt = res.data.translatedText;
      translated.lang = target;
      translated.pointer = pointer;
      await translated.save();
    } catch (e) {
      console.log("Something went wrong translating : ", e);
      return false;
    }

    return true;
  }
}
