import PushNotificationManager from "./_components/push-notification-manager/push-notification-manager";
import InstallPrompt from "./_components/install-prompt/install-prompt";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <PushNotificationManager />
      {/* <InstallPrompt /> */}
      <Button href="/register" component={Link} >Register Form</Button>
    </>
  );
}
