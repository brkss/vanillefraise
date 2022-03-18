

interface ITime {
  hours: number;
  minutes: number;
  seconds: number; 
}

export const parseTime = (time: string) : ITime => {

  const result : ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  const parsed = time.split(':');
  result.hours = parseInt(parsed[0]);
  result.minutes = parseInt(parsed[1]);
  result.seconds = parseInt(parsed[2]);

  return result;

}
