"use client";

import DatePicker from "@/components/custom/date-picker/date-picker";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const UserInfoForm = () => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ fontSize: "1.6rem", fontWeight: 500, mb: 2.8 }}
      >
        فرم اطلاعات کاربری
      </Typography>
      <Box component="form">
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField label="firstName" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField label="lastName" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <DatePicker label="birthDate" onChange={() => {}} value={null} />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }}>
            <TextField label="Outlined" variant="outlined" fullWidth />
          </Grid2>
          <Grid2 size={{ xs: 12, md: 12 }}>
            <TextField
              label="Outlined"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
            />
          </Grid2>
        </Grid2>
      </Box>
      <Button sx={{ mt: 2.8 }} type="submit">
        ثبت اطلاعات
      </Button>
    </>
  );
};

export default UserInfoForm;
