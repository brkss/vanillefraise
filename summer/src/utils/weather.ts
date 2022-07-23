const API_KEY = "ff7268b914190dd5306a5cb3e3d5a7ce";
const makeURL = (lat: string, lon: string, type: string): string => {
  return `https://api.openweathermap.org/data/2.5/${type}?lat=${lat}&lon=-${lon}&appid=${API_KEY}&units=metric`;
};

export const weather = async (lat: string, lon: string) => {
  const results = await fetch(makeURL(lat, lon, "weather"));
  const data = await results.json();
  return data;
};

export const uvi = async (lat: string, lon: string) => {
  const results = await fetch(makeURL(lat, lon, "uvi"));
  const data = await results.json();
  return data;
};
