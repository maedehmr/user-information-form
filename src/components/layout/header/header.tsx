"use client";

import {
  Container,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter, usePathname } from "@/i18n/navigation";
import { useLocale } from "next-intl";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newLocale = event.target.value;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Container sx={{ display: "flex", alignItems: "center", height: "5rem" }}>
      <FormControl sx={{ width: "6rem" }}>
        <Select value={locale} onChange={handleChange}>
          <MenuItem value="fa">FA</MenuItem>
          <MenuItem value="en">EN</MenuItem>
        </Select>
      </FormControl>
    </Container>
  );
};

export default Header;
