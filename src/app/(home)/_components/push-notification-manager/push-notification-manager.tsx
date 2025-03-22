"use client";

import {
  sendNotification,
  subscribeUser,
  unsubscribeUser,
} from "@/app/actions";
import { urlBase64ToUint8Array } from "@/utils/base64-to-uint8";
import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false);
  const [subscription, setSubscription] = useState<PushSubscription | null>(
    null
  );

  useEffect(() => {
    if ("serviceWorker" in navigator && "PushManager" in window) {
      setIsSupported(true);
      registerServiceWorker();
    }
  }, []);

  async function registerServiceWorker() {
    const registration = await navigator.serviceWorker.register("/sw.js", {
      scope: "/",
      updateViaCache: "none",
    });
    const sub = await registration.pushManager.getSubscription();
    setSubscription(sub);
  }

  async function subscribeToPush() {
    const registration = await navigator.serviceWorker.ready;
    const sub = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!
      ),
    });
    setSubscription(sub);
    const serializedSub = JSON.parse(JSON.stringify(sub));
    await subscribeUser(serializedSub);
  }

  async function unsubscribeFromPush() {
    await subscription?.unsubscribe();
    setSubscription(null);
    await unsubscribeUser();
  }

  async function sendTestNotification() {
    if (subscription) {
      await sendNotification("welcome to my app");
    }
  }

  if (!isSupported) {
    return (
      <Typography variant="body1">
        Push notifications are not supported in this browser.
      </Typography>
    );
  }

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h4">Push Notifications</Typography>
      {subscription ? (
        <>
          <Typography variant="body1">
            You are subscribed to push notifications.
          </Typography>
          <Box display="flex" gap={1}>
            <Button onClick={unsubscribeFromPush}>Unsubscribe</Button>
            <Button onClick={sendTestNotification}>Send Test</Button>
          </Box>
        </>
      ) : (
        <>
          <Typography variant="body1">
            You are not subscribed to push notifications.
          </Typography>
          <Button onClick={subscribeToPush}>Subscribe</Button>
        </>
      )}
    </Box>
  );
}

export default PushNotificationManager;
