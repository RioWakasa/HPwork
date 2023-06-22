import { Box, SxProps, Theme } from "@mui/material";

export const Header = () => {
  return (
    <Box className="Header" sx={sx}>
      <div className="flex justify-between">
        <div>テクノスタンダード</div>
        <nav className="flex justify-around">
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
    width: "100%",
  },
};
