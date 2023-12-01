
import PushNotification from 'react-native-push-notification';

const configure = () => {
  PushNotification.configure({
    onRegister: function (token) {
      console.log('TOKEN:', token);
    },
    onNotification: function (notification) {
      console.log('NOTIFICATION:', notification);
    },
    senderID: 'YOUR_SENDER_ID', 
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });
};

const scheduleNotification = (message, date) => {
  PushNotification.localNotificationSchedule({
    message,
    date,
  });
};

export default { configure, scheduleNotification };
