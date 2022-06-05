export const activityDurationScale = (duration: string): number => {
  const d = {
    minutes: 0,
    hours: 0,
  };
  const parsed_duration = duration.split(":");
  d.hours = parseInt(parsed_duration[0]);
  d.minutes = parseInt(parsed_duration[1]);
  return d.hours + d.minutes / 60;
};
