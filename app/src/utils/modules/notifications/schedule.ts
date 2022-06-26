import * as Device from "expo-device";
import * as Notification from "expo-notifications";
import { Platform } from "react-native";
import { getMealsSchedule } from "../meals/getMealsSchedule";
import * as Storage from "expo-secure-store";

export const saveScheduledNotification = async (notifications: string[]) => {
  // cancled previous notifications
  await Notification.cancelAllScheduledNotificationsAsync();
  await cancelScheduledNotifications();
  await Storage.setItemAsync(
    "SCHEDULED_MEALS_NOTIFICATIONS",
    JSON.stringify(notifications)
  );
};

export const cancelScheduledNotifications = async () => {
  console.log("canceling previous notifications ! ");
  const notifications = JSON.parse(
    (await Storage.getItemAsync("SCHEDULED_MEALS_NOTIFICATIONS")) || "[]"
  );
  for (let notification of notifications) {
    await Notification.cancelScheduledNotificationAsync(notification);
  }
  await Storage.setItemAsync("SCHEDULED_MEALS_NOTIFICATIONS", "[]");
};

export const setupMealScheduleNotification = async () => {
  console.log("setting up meal notification ");
  const scheduled: string[] = [];
  const meals = await getMealsSchedule();
  for (let meal of meals) {
    const id = await scheduleNotification(meal.name, new Date(meal.time));
    scheduled.push(id);
  }
  console.log("scheduled notifications : ", scheduled);
  await saveScheduledNotification(scheduled);
};

export const scheduleNotification = async (
  meal: string,
  time: Date
): Promise<string> => {
  console.log("scheduling single meal notification !", time);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  console.log("hours : ", hours);
  console.log("minutes: ", minutes);
  const id = await Notification.scheduleNotificationAsync({
    content: {
      title: "Vanille Fraise",
      body: `It's Time For ${meal[0] + meal.slice(1).toLowerCase()} ! 😋`,
      sound: "meal-notification.wav",
    },
    trigger: {
      minute: minutes,
      hour: hours,
      //seconds: 0,
      repeats: true,
    },
  });
  return id;
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
      sound: "meal-notification.wav",
    });
  }

  return token;
};
