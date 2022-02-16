import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface Props {
  time: number;
  timeChange: (t: ITime) => void;
}

interface ITime {
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTime = (time: number): ITime => {
  let difference = +new Date() - +new Date(time);

  let timeLeft: ITime = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (difference > 0) {
    timeLeft = {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const formatTime = (t: number) => {
  if (t < 10) return `0${t}`;
  return `${t}`;
};

export const ActiveTimer: React.FC<Props> = ({ time, timeChange }) => {
  const [timePassed, setTimePassed] = React.useState<ITime>(
    calculateTime(time)
  );
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setTimePassed(calculateTime(time));
      timeChange(timePassed);
    }, 1000);
  }, [timePassed]);
  return (
    <View style={styles.container}>
      <Text style={styles.time}>
        {formatTime(timePassed.hours)}:{formatTime(timePassed.minutes)}:
        {formatTime(timePassed.seconds)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  time: {
    fontWeight: "bold",
    fontSize: 68,
    color: "white",
    textAlign: "center",
    fontFamily: "helvitica-condesed",
  },
});
