import { IPlan } from "../../types/Plan";
import { skin_nutrients_data } from './skin'
import { hair_nutrients_data } from './hair'
import { brain_nutritients_data } from './brain'

export const data: IPlan[] = [
  {
    id: "p-5",
    title: "Healthy Brain",
    description: "",
    image: "plans/energy.png",
    nutrients: brain_nutritients_data,
  },

  {
    title: "Healthy Skin",
    description: "",
    id: "p-1",
    image: "plans/skin.png",
    nutrients: brain_nutritients_data,
  },
  {
    id: "p-2",
    title: "Healthy Hair",
    description: "",
    image: "plans/hair.jpeg",
    nutrients: brain_nutritients_data,
  },
];
