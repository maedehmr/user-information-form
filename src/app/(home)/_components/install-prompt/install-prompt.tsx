"use client";

import { Box, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    );

    setIsStandalone(window.matchMedia("(display-mode: standalone)").matches);
  }, []);

  if (isStandalone) {
    return null; // Don't show install button if already installed
  }

  return (
    <Box>
      <Typography variant="h4">Install App</Typography>
      <Button>Add to Home Screen</Button>
      {isIOS && (
        <Typography variant="body1">
          To install this app on your iOS device, tap the share button
          <Typography component="span" role="img" aria-label="share icon">
            {" "}
            ⎋{" "}
          </Typography>
          and then Add to Home Screen
          <Typography component="span" role="img" aria-label="plus icon">
            {" "}
            ➕{" "}
          </Typography>
          .
        </Typography>
      )}
    </Box>
  );
}

export default InstallPrompt;
