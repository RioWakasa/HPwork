import { Box, SxProps, Theme } from "@mui/material";

export const Company = () => {
  return (
    <Box className="Company" sx={sx}>
      <h2 className="center"><span className="white">C</span><span className="opacity">ompany</span><span className="mini">会社概要</span></h2>
      <table className="companyTable">
        <tbody>
          <tr>
            <th>会社名</th>
            <td>株式会社テクノスタンダード</td>
          </tr>
          <tr>
            <th>設立日</th>
            <td>2022年6月</td>
          </tr>
          <tr>
            <th>所在地</th>
            <td>東京都渋谷区渋谷3-10-15 YKビル7F</td>
          </tr>
          <tr>
            <th>資本金</th>
            <td>100万円</td>
          </tr>
          <tr>
            <th>代表取締役</th>
            <td>加藤拓也</td>
          </tr>
          <tr>
            <th>取引銀行<br/>
              取引先
            </th>
            <td>
              三菱UFJ銀行<br/>
              SBIネット銀行<br/>
              株式会社バンタン<br/>
              株式会社ジョブクラウン<br/>
              株式会社メルメクス<br/>
              マナルカ合同会社
            </td>
          </tr>
        </tbody>
      </table>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Company" : {
    width: "100%",
    backgroundColor: "#22A1B9",
    color: "#fff",
    padding: "60px 0"
  },
  ".opacity" : {
    color: "#fff",
    opacity: 0.6,
  }
};
