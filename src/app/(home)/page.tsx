import PushNotificationManager from "./_components/push-notification-manager/push-notification-manager";
import InstallPrompt from "./_components/install-prompt/install-prompt";

export default function Page() {
  return (
    <>
      <PushNotificationManager />
      <InstallPrompt />
    </>
  );
}
