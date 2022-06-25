import * as Device from "expo-device";
import * as Notification from "expo-notifications";
import { Platform } from "react-native";
import { getMealsSchedule } from "../meals/getMealsSchedule";

export const setupMealScheduleNotification = async () => {
  console.log("setting up meal notification ");
  const meals = await getMealsSchedule();
  for (let meal of meals) {
    await scheduleNotification(meal.name, new Date(meal.time));
  }
};

export const scheduleNotification = async (meal: string, time: Date) => {
  console.log("scheduling single meal notification !", time);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  console.log("hours : ", hours);
  console.log("minutes: ", minutes);
  const id = await Notification.scheduleNotificationAsync({
    content: {
      title: "Vanille Fraise",
      body: `It's Time for ${meal} ! 😋`,
    },
    trigger: {
      minute: minutes,
      hour: hours,
      //seconds: 0,
      repeats: true,
    },
  });
  console.log("notification id ! : ", id);
};

export const registerForPushNotificationsAsync = async () => {
  let token: string;
  let status = "";

  if (Device.isDevice) {
    const { status: exisitingStatus } =
      await Notification.getPermissionsAsync();
    status = exisitingStatus;
    if (exisitingStatus !== "granted") {
      const { status: finalStatus } =
        await Notification.requestPermissionsAsync();
      status = finalStatus;
      console.log("notification status : ", status);
    }
    if (status !== "granted") {
      alert("Notification permission denied !");
      return;
    }
    token = (await Notification.getExpoPushTokenAsync()).data;
    console.log("notifications token : ", token);
  } else {
    console.log("Notifications doesnt work in simulators ! ");
  }

  if (Platform.OS === "android") {
    Notification.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notification.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#ffffff",
    });
  }

  return token;
};
