import { Box, SxProps, Theme } from "@mui/material";
import Image from "../../resources/work/mainvisual_backgraound.png"

export const Mainvisual = () => {
  return (
    <Box className="Mainvisual" sx={sx}>
      <img className="img" src={Image}/>
      <h1 className="h1">安心と信頼×<br/>
        高度な技術力<br/>
        <span>高品質な開発を標準に。</span>
      </h1>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Mainvisual" : {
    width: "100%",
    position: "relative",
  },
  "h1" : {
    position: "absolute",
    bottom: "0",
  }
};
