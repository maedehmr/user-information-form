"use client";

import { Box, Button, Grid2, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const t = useTranslations("heroSection");

  return (
    <Box
      sx={{
        minHeight: "calc(100vh - 8rem)",
      }}
    >
      <Image
        src="/images/pink-shadow.svg"
        fill
        alt="pink-shadow"
        // style={{ right: "30%" }}
      />
      <Image
        src="/images/blue-shadow.svg"
        fill
        alt="blue-shadow"
        // style={{ left: "46%", right: "unset", top: "25%" }}
      />
      <Grid2 container sx={{ zIndex: "1", position: "relative" }}>
        <Grid2
          size={{ xs: 12, md: 7 }}
          sx={{
            marginTop: {
              xs: "1rem",
              md: "3rem",
            },
          }}
        >
          <Typography
            sx={{ fontWeight: "500", color: "primary.dark" }}
            variant="body1"
          >
            {t("subtext")}
          </Typography>
          <Typography
            variant="h1"
            sx={{
              marginTop: ".8rem",
              display: {
                xs: "flex",
                lg: "block",
              },
              flexWrap: "wrap",
              fontWeight: "700",
              color: "common.black",
              fontSize: {
                xs: "2rem",
                md: "3rem",
                lg: "4rem",
              },
              lineHeight: {
                xs: "3rem",
                md: "4rem",
                lg: "6rem",
              },
            }}
          >
            {t("headline")}
            <Typography
              component="span"
              sx={{
                fontSize: "inherit",
                fontWeight: "900",
                color: "common.white",
                margin: {
                  xs: "0",
                  sm: "0 .8rem",
                },
                padding: "0 2.5rem",
                borderRadius: "4rem",
                backgroundImage: (theme) =>
                  `linear-gradient(to right, ${theme.palette.primary.dark}, ${theme.palette.primary.light})`,
              }}
            >
              {t("keyword")}
            </Typography>
          </Typography>
          <Typography
            sx={{
              width: {
                xs: "100%",
                lg: "60%",
              },
              color: "common.black",
              marginTop: "1.4rem",
              lineHeight: "1.8rem",
            }}
            variant="body1"
          >
            {t("description")}
          </Typography>
          <Button href="/register" component={Link} sx={{ marginTop: "2rem" }}>
            {t("button")}
          </Button>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          sx={{ display: "flex", alignItems: "center", justifyContent: "end" }}
        >
          <Image
            src="/images/creative-girl.png"
            alt="creative-girl"
            width={654}
            height={654}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default HeroSection;
