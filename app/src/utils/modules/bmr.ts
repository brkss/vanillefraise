
const getAge = (dateString: any) => {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const calcBMR = (birth: Date, weight: number, height: number, gender: string) => {
    let BMR = 1;
    if (gender == "MALE") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * getAge(birth);
    } else if (gender == "FEMALE") {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * getAge(birth);
    }
    
    return Math.floor(BMR)
  };

