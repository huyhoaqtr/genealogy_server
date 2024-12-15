import * as admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.json"; 

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});

interface NotificationMessage {
  title: string;
  body: string;
  tokens: string[];
}

interface DataMessage {
  data: { [key: string]: string };
  tokens: string[];
}

interface MixedMessage {
  title: string;
  body: string;
  data: { [key: string]: string };
  tokens: string[];
}

interface TopicMessage {
  title: string;
  body: string;
  topic: string;
}

interface ConditionMessage {
  title: string;
  body: string;
  condition: string;
}

// Hàm gửi thông báo Notification
export const sendNotification = async ({
  title,
  body,
  tokens,
}: NotificationMessage) => {
  const message = {
    notification: {
      title,
      body,
    },
    tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`${response.successCount} notifications sent successfully`);
    return response;
  } catch (error) {
    console.error("Error sending notifications:", error);
    throw new Error("Error sending notifications");
  }
};

// Hàm gửi thông báo Data (chỉ gửi dữ liệu)
export const sendDataMessage = async ({ data, tokens }: DataMessage) => {
  const message = {
    data,
    tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`${response.successCount} data messages sent successfully`);
    return response;
  } catch (error) {
    console.error("Error sending data messages:", error);
    throw new Error("Error sending data messages");
  }
};

// Hàm gửi thông báo Mixed (cả thông báo và dữ liệu)
export const sendMixedMessage = async ({
  title,
  body,
  data,
  tokens,
}: MixedMessage) => {
  const message = {
    notification: {
      title,
      body,
    },
    data,
    tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`${response.successCount} mixed messages sent successfully`);
    return response;
  } catch (error) {
    console.error("Error sending mixed messages:", error);
    throw new Error("Error sending mixed messages");
  }
};

// Hàm gửi thông báo cho Topic
export const sendTopicMessage = async ({
  title,
  body,
  topic,
}: TopicMessage) => {
  const message = {
    notification: {
      title,
      body,
    },
    topic,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log(`${response} notifications sent to topic "${topic}"`);
    return response;
  } catch (error) {
    console.error("Error sending topic notifications:", error);
    throw new Error("Error sending topic notifications");
  }
};

// Hàm gửi thông báo có Condition
export const sendConditionMessage = async ({
  title,
  body,
  condition,
}: ConditionMessage) => {
  const message = {
    notification: {
      title,
      body,
    },
    condition,
  };

  try {
    const response = await admin.messaging().send(message);
    console.log(`${response} notifications sent with condition "${condition}"`);
    return response;
  } catch (error) {
    console.error("Error sending condition notifications:", error);
    throw new Error("Error sending condition notifications");
  }
};

// Hàm gửi thông báo cho một danh sách người dùng (Multicast)
export const sendMulticastNotifications = async (
  title: string,
  body: string,
  tokens: string[]
) => {
  const message = {
    notification: {
      title,
      body,
    },
    tokens,
  };

  try {
    const response = await admin.messaging().sendEachForMulticast(message);
    console.log(`${response.successCount} notifications sent successfully`);
    return response;
  } catch (error) {
    console.error("Error sending multicast notifications:", error);
    throw new Error("Error sending multicast notifications");
  }
};

