import PushNotificationManager from "./_components/push-notification-manager/push-notification-manager";
import InstallPrompt from "./_components/install-prompt/install-prompt";
import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();

  return (
    <>
      {/* <PushNotificationManager /> */}
      {/* <InstallPrompt /> */}
      <Button href="/register" component={Link}>
        {t("userInfoForm")}
      </Button>
    </>
  );
}
