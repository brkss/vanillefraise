import { getAge } from './getAge';
export const calculateREE = (
  gender: string,
  weight: number,
  height: number,
  birth: any
) => {
  const age = getAge(birth);
  let res = 0;
  if (gender === "MALE") res = 10 * weight + 6.25 * height - 5 * age + 5;
  else if (gender === "FEMALE")
    res = 10 * weight + 6.25 * height - 5 * age - 161;
  return Math.floor(res);
};

export const calculateTDEE = (activity: number, ree: number) => {
  return Math.floor(ree * activity);
};