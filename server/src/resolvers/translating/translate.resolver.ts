import { Mutation, Query, Resolver, InputType, Field, Arg } from "type-graphql";
import axios, { Axios } from "axios";
import { Translated } from "../../entity/Translate/Translated";
import FormData from "form-data";
import { Ingredient } from "../../entity/Recipe/Ingredient";
import { Instruction } from "../../entity/Recipe/Instuction";
import { target_languages } from "../../utils/data/translate/refrence";

@InputType()
class TranslateInput {
  @Field()
  txt: string;

  @Field()
  type: string;

  @Field()
  target: string;

  @Field()
  pointer: string;
}

@Resolver()
export class TranlatingResolver {
  
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
