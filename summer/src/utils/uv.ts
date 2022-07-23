const protections = [
  "Use sunscreen",
  "Wear sunglasses",
  "Wear a hat",
  "Stay in the shade",
  "Stay indoors between 10am-4pm",
];

const uv_protection = [
  {
    uvmin: 0,
    uvmax: 2,
    protection: protections.slice(0, 2),
  },
  {
    uvmin: 3,
    uvmax: 5,
    protection: protections.slice(0, 3),
  },
  {
    uvmin: 6,
    uvmax: 7,
    protection: protections.slice(0, 4),
  },
  {
    uvmin: 8,
    uvmax: 10,
    protection: protections.slice(0, 4),
  },
  {
    uvmin: 11,
    uvmax: Number.MAX_VALUE,
    protection: protections.slice(0, 5),
  },
];

export const getUVProtection = (uv: number): string[] => {
  console.log("uv sent : ", uv);
  const p = uv_protection.find((x) => x.uvmin <= uv && x.uvmax >= uv);
  if (!p) return protections;
  return p.protection;
};

export const getUVBadge = (uv: number) => {
  let res = {
    color: "#",
    label: "Low",
  };

  if (uv >= 0 && uv <= 2)
    return {
      color: "#a3ea77",
      label: "low",
    };
  if (uv >= 3 && uv <= 5)
    return {
      color: "#ffe18d",
      label: "medium",
    };
  if (uv >= 6 && uv <= 7)
    return {
      color: "#ffc179",
      label: "high",
    };
  if (uv >= 8 && uv <= 10)
    return {
      color: "#ff8d63",
      label: "very high",
    };
  else
    return {
      color: "#ff7463",
      label: "extremely high",
    };
};
