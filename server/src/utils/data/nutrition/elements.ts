interface Model {
  rangeStart: number;
  rangeEnd: number;
  name: string;
  code: string;
  gender: string;
  quantity: number;
  unit: string;
}
//let data = male.forEach(prt => { const p = Array.from($0.children);  })
const names = [
  "Calcium",
  "Chromium",
  "Copper",
  "Fluoride",
  "Iodine",
  "Iron",
  "Magnesium",
  "Manganese",
  "Molybdenum",
  "Phosphorus",
  "Selenium",
  "Zinc",
  "Potassium",
  "Sodium",
  "Chloride",
];

const male_elements_data =
  '[{"age":"9–13 y","Calcium":"1,300","Chromium":"25*","Copper":"700","Fluoride":"2*","Iodine":"120","Iron":"8","Magnesium":"240","Manganese":"1.9*","Molybdenum":"34","Phosphorus":"1,250","Selenium":"40","Zinc":"8","Potassium":"2,500*","Sodium":"1,200*","Chloride":"2.3*","gender":"MALE"},{"age":"14–18 y","Calcium":"1,300","Chromium":"35*","Copper":"890","Fluoride":"3*","Iodine":"150","Iron":"11","Magnesium":"410","Manganese":"2.2*","Molybdenum":"43","Phosphorus":"1,250","Selenium":"55","Zinc":"11","Potassium":"3,000*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"19–30 y","Calcium":"1,000","Chromium":"35*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"400","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"31–50 y","Calcium":"1,000","Chromium":"35*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"51–70 y","Calcium":"1,000","Chromium":"30*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.0*","gender":"MALE"},{"age":"> 70 y","Calcium":"1,200","Chromium":"30*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"1.8*","gender":"MALE"}]';

const female_elements_data =
  '[{"age":"9–13 y","Calcium":"1,300","Chromium":"21*","Copper":"700","Fluoride":"2*","Iodine":"120","Iron":"8","Magnesium":"240","Manganese":"1.6*","Molybdenum":"34","Phosphorus":"1,250","Selenium":"40","Zinc":"8","Potassium":"2,300*","Sodium":"1,200*","Chloride":"2.3*","gender":"FEMALE"},{"age":"14–18 y","Calcium":"1,300","Chromium":"24*","Copper":"890","Fluoride":"3*","Iodine":"150","Iron":"15","Magnesium":"360","Manganese":"1.6*","Molybdenum":"43","Phosphorus":"1,250","Selenium":"55","Zinc":"9","Potassium":"2,300*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"19–30 y","Calcium":"1,000","Chromium":"25*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"18","Magnesium":"310","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"31–50 y","Calcium":"1,000","Chromium":"25*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"18","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"51–70 y","Calcium":"1,200","Chromium":"20*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"8","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.0*","gender":"FEMALE"},{"age":"> 70 y","Calcium":"1,200","Chromium":"20*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"8","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"1.8*","gender":"FEMALE"}]';

const pregnancy_elements_data =
  '[{"Calcium":"14–18 y","Chromium":"1,300","Copper":"29*","Fluoride":"1,000","Iodine":"3*","Iron":"220","Magnesium":"27","Manganese":"400","Molybdenum":"2.0*","Phosphorus":"50","Selenium":"1,250","Zinc":"60","Potassium":"12","Sodium":"2,600*","Chloride":"1,500*","undefined":"2.3*","gender":"PREGNANCY"},{"Calcium":"19–30 y","Chromium":"1,000","Copper":"30*","Fluoride":"1,000","Iodine":"3*","Iron":"220","Magnesium":"27","Manganese":"350","Molybdenum":"2.0*","Phosphorus":"50","Selenium":"700","Zinc":"60","Potassium":"11","Sodium":"2,900*","Chloride":"1,500*","undefined":"2.3*","gender":"PREGNANCY"},{"Calcium":"31–50 y","Chromium":"1,000","Copper":"30*","Fluoride":"1,000","Iodine":"3*","Iron":"220","Magnesium":"27","Manganese":"360","Molybdenum":"2.0*","Phosphorus":"50","Selenium":"700","Zinc":"60","Potassium":"11","Sodium":"2,900*","Chloride":"1,500*","undefined":"2.3*","gender":"PREGNANCY"}]';

const lactation_elements_data =
  '[{"Calcium":"14–18 y","Chromium":"1,300","Copper":"44*","Fluoride":"1,300","Iodine":"3*","Iron":"290","Magnesium":"10","Manganese":"360","Molybdenum":"2.6*","Phosphorus":"50","Selenium":"1,250","Zinc":"70","Potassium":"13","Sodium":"2,500*","Chloride":"1,500*","undefined":"2.3*","gender":"LACTATION"},{"Calcium":"19–30 y","Chromium":"1,000","Copper":"45*","Fluoride":"1,300","Iodine":"3*","Iron":"290","Magnesium":"9","Manganese":"310","Molybdenum":"2.6*","Phosphorus":"50","Selenium":"700","Zinc":"70","Potassium":"12","Sodium":"2,800*","Chloride":"1,500*","undefined":"2.3*","gender":"LACTATION"},{"Calcium":"31–50 y","Chromium":"1,000","Copper":"45*","Fluoride":"1,300","Iodine":"3*","Iron":"290","Magnesium":"9","Manganese":"320","Molybdenum":"2.6*","Phosphorus":"50","Selenium":"700","Zinc":"70","Potassium":"12","Sodium":"2,800*","Chloride":"1,500*","undefined":"2.3*","gender":"LACTATION"}]';

const children_elements_data = '[{"Calcium":"1–3 y","Chromium":"700","Copper":"11*","Fluoride":"340","Iodine":"0.7*","Iron":"90","Magnesium":"7","Manganese":"80","Molybdenum":"1.2*","Phosphorus":"17","Selenium":"460","Zinc":"20","Potassium":"3","Sodium":"2,000*","Chloride":"800*","undefined":"1.5*","gender":"CHILDREN"},{"Calcium":"4–8 y","Chromium":"1,000","Copper":"15*","Fluoride":"440","Iodine":"1*","Iron":"90","Magnesium":"10","Manganese":"130","Molybdenum":"1.5*","Phosphorus":"22","Selenium":"500","Zinc":"30","Potassium":"5","Sodium":"2,300*","Chloride":"1,000*","undefined":"1.9*","gender":"CHILDREN"}]';

const takenElementsPerDay: Model[] = [];
