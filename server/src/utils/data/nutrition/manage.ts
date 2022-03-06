
export const getAgeRange = (data: any[]) => {
  const res = data.map((el) => {
    const age = el.age.split(" ")[0].split("–");
    console.log("AGE => ", age);
    return {
      ...el,
      ageStart: age[0],
      ageEnd: age[1],
    };
  });
  return res;
};

