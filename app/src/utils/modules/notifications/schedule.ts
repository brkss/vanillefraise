import * as Device from "expo-device";
import * as Notification from "expo-notifications";
import { Platform } from "react-native";

export const scheduleNotification = async (title: string, body: string) => {
  await Notification.scheduleNotificationAsync({
    content: {
      title: title,
      body: body,
    },
    trigger: {
      seconds: 2,
      repeats: true,
    },
  });
};

export const registerForPushNotificationsAsync = async () => {
  let token: string;
  let status = "";

  if (Device.isDevice) {
    const { status: exisitingStatus } =
      await Notification.getPermissionsAsync();
    if (exisitingStatus !== "granted") {
      const { status: finalStatus } =
        await Notification.requestPermissionsAsync();
      status = finalStatus;
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