export const calculateREE = (
  gender: string,
  weight: number,
  height: number,
  age: number
) => {
  let res = 0;
  if (gender === "MALE") res = 10 * weight + 6.25 * height - 5 * age + 5;
  else if (gender === "FEMALE") res =  10 * weight + 6.25 * height  - 5 * age - 161  
  return res;
};
