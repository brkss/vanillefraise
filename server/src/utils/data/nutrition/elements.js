var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//let data = male.forEach(prt => { const p = Array.from($0.children);  })
var names = [
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
var male_elements_data = '[{"age":"9–13 y","Calcium":"1,300","Chromium":"25*","Copper":"700","Fluoride":"2*","Iodine":"120","Iron":"8","Magnesium":"240","Manganese":"1.9*","Molybdenum":"34","Phosphorus":"1,250","Selenium":"40","Zinc":"8","Potassium":"2,500*","Sodium":"1,200*","Chloride":"2.3*","gender":"MALE"},{"age":"14–18 y","Calcium":"1,300","Chromium":"35*","Copper":"890","Fluoride":"3*","Iodine":"150","Iron":"11","Magnesium":"410","Manganese":"2.2*","Molybdenum":"43","Phosphorus":"1,250","Selenium":"55","Zinc":"11","Potassium":"3,000*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"19–30 y","Calcium":"1,000","Chromium":"35*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"400","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"31–50 y","Calcium":"1,000","Chromium":"35*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.3*","gender":"MALE"},{"age":"51–70 y","Calcium":"1,000","Chromium":"30*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"2.0*","gender":"MALE"},{"age":"70–100 y","Calcium":"1,200","Chromium":"30*","Copper":"900","Fluoride":"4*","Iodine":"150","Iron":"8","Magnesium":"420","Manganese":"2.3*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"11","Potassium":"3,400*","Sodium":"1,500*","Chloride":"1.8*","gender":"MALE"}]';
var female_elements_data = '[{"age":"9–13 y","Calcium":"1,300","Chromium":"21*","Copper":"700","Fluoride":"2*","Iodine":"120","Iron":"8","Magnesium":"240","Manganese":"1.6*","Molybdenum":"34","Phosphorus":"1,250","Selenium":"40","Zinc":"8","Potassium":"2,300*","Sodium":"1,200*","Chloride":"2.3*","gender":"FEMALE"},{"age":"14–18 y","Calcium":"1,300","Chromium":"24*","Copper":"890","Fluoride":"3*","Iodine":"150","Iron":"15","Magnesium":"360","Manganese":"1.6*","Molybdenum":"43","Phosphorus":"1,250","Selenium":"55","Zinc":"9","Potassium":"2,300*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"19–30 y","Calcium":"1,000","Chromium":"25*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"18","Magnesium":"310","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"31–50 y","Calcium":"1,000","Chromium":"25*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"18","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.3*","gender":"FEMALE"},{"age":"51–70 y","Calcium":"1,200","Chromium":"20*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"8","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.0*","gender":"FEMALE"},{"age":"70–100 y","Calcium":"1,200","Chromium":"20*","Copper":"900","Fluoride":"3*","Iodine":"150","Iron":"8","Magnesium":"320","Manganese":"1.8*","Molybdenum":"45","Phosphorus":"700","Selenium":"55","Zinc":"8","Potassium":"2,600*","Sodium":"1,500*","Chloride":"1.8*","gender":"FEMALE"}]';
var pregnancy_elements_data = '[{"age":"14–18 y","Calcium":"1,300","Chromium":"29*","Copper":"1,000","Fluoride":"3*","Iodine":"220","Iron":"27","Magnesium":"400","Manganese":"2.0*","Molybdenum":"50","Phosphorus":"1,250","Selenium":"60","Zinc":"12","Potassium":"2,600*","Sodium":"1,500*","Chloride":"2.3*","gender":"PREGNANCY"},{"age":"19–30 y","Calcium":"1,000","Chromium":"30*","Copper":"1,000","Fluoride":"3*","Iodine":"220","Iron":"27","Magnesium":"350","Manganese":"2.0*","Molybdenum":"50","Phosphorus":"700","Selenium":"60","Zinc":"11","Potassium":"2,900*","Sodium":"1,500*","Chloride":"2.3*","gender":"PREGNANCY"},{"age":"31–50 y","Calcium":"1,000","Chromium":"30*","Copper":"1,000","Fluoride":"3*","Iodine":"220","Iron":"27","Magnesium":"360","Manganese":"2.0*","Molybdenum":"50","Phosphorus":"700","Selenium":"60","Zinc":"11","Potassium":"2,900*","Sodium":"1,500*","Chloride":"2.3*","gender":"PREGNANCY"}]';
var lactation_elements_data = '[{"age":"14–18 y","Calcium":"1,300","Chromium":"44*","Copper":"1,300","Fluoride":"3*","Iodine":"290","Iron":"10","Magnesium":"360","Manganese":"2.6*","Molybdenum":"50","Phosphorus":"1,250","Selenium":"70","Zinc":"13","Potassium":"2,500*","Sodium":"1,500*","Chloride":"2.3*","gender":"LACTATION"},{"age":"19–30 y","Calcium":"1,000","Chromium":"45*","Copper":"1,300","Fluoride":"3*","Iodine":"290","Iron":"9","Magnesium":"310","Manganese":"2.6*","Molybdenum":"50","Phosphorus":"700","Selenium":"70","Zinc":"12","Potassium":"2,800*","Sodium":"1,500*","Chloride":"2.3*","gender":"LACTATION"},{"age":"31–50 y","Calcium":"1,000","Chromium":"45*","Copper":"1,300","Fluoride":"3*","Iodine":"290","Iron":"9","Magnesium":"320","Manganese":"2.6*","Molybdenum":"50","Phosphorus":"700","Selenium":"70","Zinc":"12","Potassium":"2,800*","Sodium":"1,500*","Chloride":"2.3*","gender":"LACTATION"}]';
var children_elements_data = '[{"age":"1–3 y","Calcium":"700","Chromium":"11*","Copper":"340","Fluoride":"0.7*","Iodine":"90","Iron":"7","Magnesium":"80","Manganese":"1.2*","Molybdenum":"17","Phosphorus":"460","Selenium":"20","Zinc":"3","Potassium":"2,000*","Sodium":"800*","Chloride":"1.5*","gender":"CHILDREN"},{"age":"4–8 y","Calcium":"1,000","Chromium":"15*","Copper":"440","Fluoride":"1*","Iodine":"90","Iron":"10","Magnesium":"130","Manganese":"1.5*","Molybdenum":"22","Phosphorus":"500","Selenium":"30","Zinc":"5","Potassium":"2,300*","Sodium":"1,000*","Chloride":"1.9*","gender":"CHILDREN"}]';
var getAgeRange = function (data) {
    var res = data.map(function (el) {
        var age = el.age.split(" ")[0].split("–");
        console.log("AGE => ", age);
        return __assign(__assign({}, el), { ageStart: age[0], ageEnd: age[1] });
    });
    return res;
};
console.log(getAgeRange(JSON.parse(male_elements_data)));
var takenElementsPerDay = [];