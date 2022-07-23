interface IData {
  skinId: number;
  locationPermision: boolean;
}

export const save = (data: IData) => {
  localStorage.removeItem("METADATA");
  localStorage.setItem("METADATA", JSON.stringify(data));
};

export const reset = () => {
  localStorage.removeItem("METADATA");
};

export const getMetadata = (): IData | null => {
  const md = localStorage.getItem("METADATA");
  if (md) return JSON.parse(md);
  return null;
};
