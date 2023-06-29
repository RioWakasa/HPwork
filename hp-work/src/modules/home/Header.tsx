import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header white" sx={sx}>
      <div className="flex justify-between">
        <div>テクノスタンダードロゴ</div>
        <nav className="flex justify-around h-nav">
          <li>TOP</li>
          <li>ABOUT</li>
          <li>SERVICE</li>
          <li>COMPANY</li>
          <li className="backBlue">CONTACT</li>
        </nav>
      </div>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Header" : {
    position: "absolute",
    zIndex: 100,
    width: "100%",
  },
};
