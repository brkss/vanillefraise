import React from "react";
import {
  scheduleNotification,
  registerForPushNotificationsAsync,
} from "./schedule";
import * as Notifications from "expo-notifications";
import { Text, Pressable, View } from "react-native";

/// init notification hander !
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

const wait = async (timeout: number) => {
  new Promise((resolve, _) => setTimeout(resolve, timeout));
};

export const MealScheduleNotification: React.FC = () => {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState<any>();
  const notificationListner = React.useRef<any>();
  const responseListner = React.useRef<any>();

  React.useEffect(() => {
    (async () => {
      const token = await registerForPushNotificationsAsync();
      setExpoPushToken(token);

      notificationListner.current =
        Notifications.addNotificationReceivedListener((not) =>
          setNotification(not)
        );
      responseListner.current =
        Notifications.addNotificationResponseReceivedListener((res) => {
          console.log("notification response recied lister response : ", res);
        });

      await scheduleNotification(
        "test notification on start !",
        "testtttiiiiiinnnnng !!!"
      );
      console.log("just scheduled notification for like 2 sec !");
    })();
    return () => {
      Notifications.removeNotificationSubscription(notificationListner.current);
      Notifications.removeNotificationSubscription(responseListner.current);
    };
  }, []);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Pressable
        onPress={async () => await scheduleNotification("testing", "testing")}
        style={{ backgroundColor: "black" }}
      >
        <Text style={{ color: "white" }}>Schedule !</Text>
      </Pressable>
    </View>
  );
};
