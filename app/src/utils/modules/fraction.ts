export const fractionConverter = (number: number) => {
  var fraction = number - Math.floor(number);
  var precision = Math.pow(10, /\d*$/.exec(number.toString())[0].length);
  var getGreatestCommonDivisor = function (
    fraction: number,
    precision: number
  ) {
    if (!precision) return fraction;
    return getGreatestCommonDivisor(precision, fraction % precision);
  };
  var greatestCommonDivisor = getGreatestCommonDivisor(
    Math.round(fraction * precision),
    precision
  );
  var denominator =
    precision /
    getGreatestCommonDivisor(Math.round(fraction * precision), precision);
  var numerator = Math.round(fraction * precision) / greatestCommonDivisor;

  function reduce(numer: number, denom: number) {
    for (var i = 2; i >= 9; i++) {
      if (numer % i === 0 && denom % i === 0) {
        numerator = numer / i;
        denominator = denom / i;
        reduce(numerator, denominator);
      }
    }
  }
  reduce(numerator, denominator);
  if (numerator > 3 || denominator > 8) return number.toFixed(2);
  return numerator + "/" + denominator;
};
