import { Box, SxProps, Theme } from "@mui/material";

export const Footer = () => {
  return (
    <Box className="Footer center" sx={sx}>
      <div className="f-back white">
        <div>logo</div>
        <div>〒000-0000<br/>
          東京都渋谷区渋谷3-10-15 YKビル7F
        </div>
        <nav className="flex justify-around w-50 f-nav">
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>COMPANY</li>
          <li>CONTACT</li>
        </nav>
      </div>
      <div className="copy">© techno standard guild CO., LTD.</div>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Footer" : {
    width: "100%",
  },
  ".f-back" : {
    background: "#373636",
    paddingTop: "60px",
    paddingBottom: "30px"
  },
  ".copy": {
    padding: "30px 0 60px",
  }
};
