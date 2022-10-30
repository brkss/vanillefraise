import { ActivityCategory } from "../../../entity/Activity/ActivityCategory";

const durationScale = (duration: string) => {
  const parsed = duration.split(":");
  const d = {
    hours: parseInt(parsed[0]),
    minutes: parseInt(parsed[1]),
  };
  return d.hours * 60 + d.minutes;
};

export const calculateActivityBurnedCalories = (
  category: ActivityCategory,
  duration: string,
  weight: number,
  feedback: string
) => {
  const scale = durationScale(duration);
  let met = 0;
  if (
    feedback.toLowerCase() === "intense" ||
    feedback.toLowerCase() === "strong"
  )
    met = category.highmet;
  else met = category.lowmet;
  const bc = (met * weight * 3.5) / 200;
  return Math.floor(bc * scale);
};
