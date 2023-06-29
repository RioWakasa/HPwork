import { Margin } from "@mui/icons-material";
import { Box, SxProps, Theme } from "@mui/material";
import Image from "../../resources/work/about_illustration.png"

export const About = () => {
  return (
    <Box className="About, center" sx={sx}>
      <h2><span className="blue">A</span>bout<span className="mini">私たちについて</span></h2>
      <img className="img w-75" src={Image}/>
      <div className="w-60">
        <p>副業人材を主体とした<span className="blue">「業務委託サービス」</span>です。<br/>
          通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担う
          フリーランスエンジニアが<span className="blue">現在約100名</span>ほど所属しています。
        </p>
        <p>副業を主体としているため長時間の拘束稼働はできませんが、<br/>
          トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。<br/>
          クライアント側のチームメンバーと共同して開発を行うこともできるため、<br/>
          <span className="blue">クライアント所属のエンジニアのスキルアップ</span>を行うことも可能です。
        </p>
      </div>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.About" : {
    width: "100%",
    backgroundColor: "#22A1B91A",
    fontSize: "18px",
    fontWeight: "700",
    padding: "60px 0",
  },
};
