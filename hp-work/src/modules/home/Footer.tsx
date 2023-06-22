import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer" sx={sx}>
      <div>logo</div>
      <div>〒000-0000<br/>
        東京都渋谷区渋谷3-10-15 YKビル7F
      </div>
      <nav className="flex justify-around w-50">
        <li>ABOUT</li>
        <li>SERVICE</li>
        <li>COMPANY</li>
        <li>CONTACT</li>
      </nav>
      <div>© techno standard guild CO., LTD.</div>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
    textAlign: "center",
  },
};
