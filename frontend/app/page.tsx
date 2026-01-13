"use client";
import {
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState("outside");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-sky-700 to-sky-200 font-sans">
      <Card
        sx={{
          gap: 2,
          width: "80%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          padding: 4,
          overflowY: "auto",
        }}
      >
        <div className="flex w-full justify-center align-center">
          <Typography
            variant="h5"
            component="h1"
            gutterBottom
            sx={{
              fontSize: {
                xs: "1.25rem",
                sm: "1.5rem",
                md: "1.75rem",
              },
              fontWeight: 600,
            }}
          >
            แบบฟอร์มแจ้งปัญหาด้าน IT
          </Typography>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          {/* <DemoContainer components={["DatePicker"]}> */}
          <DatePicker label="วันที่แจ้ง" />
          {/* </DemoContainer> */}
        </LocalizationProvider>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">ผู้แจ้ง</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            value={value}
            onChange={handleChange}
          >
            <FormControlLabel
              value="outside"
              control={<Radio />}
              label="ภายนอก"
            />
            <FormControlLabel
              value="inside"
              control={<Radio />}
              label="ภายใน"
            />
          </RadioGroup>
        </FormControl>
        {value === "inside" ? (
          <TextField required label="รหัสพนักงาน"></TextField>
        ) : (
          <div className="flex flex-col gap-2">
            <TextField required label="Email"></TextField>
            <TextField label="ชื่อผู้แจ้ง"></TextField>
            <TextField label="บริษัท"></TextField>
            <TextField label="เบอร์โทร"></TextField>
          </div>
        )}
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">ประเภทบริการ</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="ประเภทบริการ"
            sx={{
              "& .MuiSelect-select": {
                whiteSpace: "normal",
                wordBreak: "break-word",
                lineHeight: 1.4,
                paddingTop: "10px",
                paddingBottom: "10px",
              },
            }}
            MenuProps={{
              PaperProps: {
                sx: {
                  maxWidth: {
                    xs: "90vw",
                    sm: "100%",
                  },
                },
              },
            }}
          >
            <MenuItem sx={{ whiteSpace: "normal" }} value="option1">
              MS Office
            </MenuItem>
            <MenuItem sx={{ whiteSpace: "normal" }} value="option2">
              PC/Mobile Device/Notebook/Printer
            </MenuItem>
            <MenuItem sx={{ whiteSpace: "normal" }} value="option3">
              ขอติดตั้ง Software
            </MenuItem>
            <MenuItem sx={{ whiteSpace: "normal" }} value="option4">
              ขอบริการเกี่ยวกับบัญชีผู้ใช้งาน รหัสผ่าน สิทธิการใช้งาน
            </MenuItem>
            <MenuItem sx={{ whiteSpace: "normal" }} value="option5">
              ระบบงานภายนอก
            </MenuItem>
            <MenuItem sx={{ whiteSpace: "normal" }} value="option6">
              ระบบงานภายใน
            </MenuItem>
          </Select>
        </FormControl>
        <TextField label="ปัญหา/ความต้องการ" multiline minRows={4}></TextField>
        <div className="flex gap-2 mt-auto">
          <Button variant="contained" size="small">
            บันทึกแบบร่าง
          </Button>
          <Button variant="contained" size="small">
            ส่งมอบงาน
          </Button>
        </div>
      </Card>
    </div>
  );
}
