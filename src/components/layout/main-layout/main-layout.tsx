"use client";

import { Container } from "@mui/material";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container component="main" sx={{ my: "3rem" }}>
      {children}
    </Container>
  );
};

export default MainLayout;
