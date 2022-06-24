import React from "react";
import {
  scheduleNotification,
  registerForPushNotificationsAsync,
} from "./schedule";
import * as Notifications from "expo-notifications";

/// init notification hander !
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export const MealNotification: React.FC = () => {
  const [expoPushToken, setExpoPushToken] = React.useState("");
  const [notification, setNotification] = React.useState<any>();
  const notificationListner = React.useRef<any>();
  const responseListner = React.useRef<any>();

  React.useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    notificationListner.current = Notifications.addNotificationReceivedListener(
      (not) => setNotification(not)
    );
    responseListner.current =
      Notifications.addNotificationResponseReceivedListener((res) => {
        console.log("notification response recied lister response : ", res);
      });
    return () => {
      Notifications.removeNotificationSubscription(notificationListner.current);
      Notifications.removeNotificationSubscription(responseListner.current);
    };
  }, []);

  return null;
};
