import { Box, Button, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("heroSection");

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 80px)",
      }}
    >
      <Image
        src="/images/pink-shadow.svg"
        fill
        alt="pink-shadow"
        style={{ right: "30%" }}
      />
      <Image
        src="/images/blue-shadow.svg"
        fill
        alt="blue-shadow"
        style={{ left: "43%", right: "unset" }}
      />
      <Grid2 container sx={{ zIndex: "1", position: "absolute" }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="body1">{t("subtext")}</Typography>
          <Typography variant="h1" sx={{ fontWeight: "900" }}>
            {t("headline")}
            <Typography sx={{ fontSize: "inherit", fontWeight: "inherit" }}>
              {t("keyword")}
            </Typography>
          </Typography>
          <Button href="/register" component={Link}>
            {t("button")}
          </Button>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 6 }}
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Image
            src="/images/creative-girl.png"
            alt="creative-girl"
            width={654}
            height={654}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default HeroSection;
