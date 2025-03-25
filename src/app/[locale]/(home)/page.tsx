import { Button } from "@mui/material";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { InstallPrompt, PushNotificationManager } from "./_components";

export default function Page() {
  const t = useTranslations();

  return (
    <>
      {/* <PushNotificationManager />
      <InstallPrompt /> */}
      <Button href="/register" component={Link}>
        {t("userInfoForm")}
      </Button>
    </>
  );
}
