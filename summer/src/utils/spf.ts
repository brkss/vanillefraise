import { skins } from "./data/skins";

export const getSPF = (skinID: number, hours: "1" | "2" | "3" | "4" | "5") => {
  const skin = skins.find((x) => x.id === skinID);
  if (!skin) return "0";
  return skin.spf[hours];
};
