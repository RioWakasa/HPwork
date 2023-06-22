import { Box, SxProps, Theme } from "@mui/material";
import Image1 from "../../resources/work1/images/bicycle1.jpg";
import Image2 from "../../resources/work1/images/bicycle2.jpg";
import Image3 from "../../resources/work1/images/bicycle3.jpg";
import { FontDownload } from "@mui/icons-material";

export const Service = () => {
  return (
    <Box className="Service" sx={sx}>
      <h2 className="center"><span className="blue">S</span>ervice<span className="mini">事業内容</span></h2>
      <div className="flex contents">
        <img src={Image1}/>
        <div>
          <h3>プログラマーズギルド<br/>
            <span className="titleEn blue">Programmers Guild</span><br/>
            <span className="titleJp">チーム開発の請負サービス</span>
          </h3>
          <p>副業人材を主体とした「業務委託サービス」です。
              通常では人材派遣の市場に出てこないような大企業に勤めているベテランのエンジニアや開発の中核を担うフリーランスエンジニアが現在約100名ほど所属しています。
              副業を主体としているため長時間の拘束稼働はできませんが、トップレベルの知識と経験を活かして複数人でチームとなってクライアントの業務を請け負います。 
              クライアント側のチームメンバーと共同して開発を行うこともできるため、クライアント所属のエンジニアのスキルアップを行うことも可能です。
          </p>
          <a className="blue" href="#">MORE</a>
        </div>
      </div>
      <div className="flex contents">
        <div>
          <h3>テクノエレメント<br/>
            <span className="titleEn blue">Techno Element</span><br/>
            <span className="titleJp">フレキシブルなSES事業</span>
          </h3>
          <p>お客さまのプロジェクトで人手が足りない場合に、「スポットで力を入れるため1ヶ月フルで稼働できるエンジニアが２、３人欲しい」、「特定のスキルを持った人材が1人が欲しい」といった、要望にも対応することができる SES 事業も手がけています。
            弊社は多くの人材をプールしているため、お客様の事業フェーズにあったご要望にフレキシブルにご提供できます。
            事業分野も Web やクライアントアプリの開発からインフラまで、業界・ジャンルに問わずさまざまな人材をご用意しております。
            また、現役の Web/IT エンジニアも多数所属しているため、開発から得た知見や技術も提供することができます。
            結果として保守性が高く、事業の規模や今後のスケールに合わせて拡張しやすい、高品質な開発のサポートを行うことも可能です。
          </p>
          <a className="blue" href="#">MORE</a>
        </div>
        <img src={Image2}/>
      </div>
      <div className="flex contents">
        <img src={Image3}/>
        <div>
          <h3>エンジニア教育<br/>
            <span className="titleEn blue">Top engineer Experience Program</span><br/>
            <span className="titleJp">トップエンジニアとの開発を体験する</span>
          </h3>
          <p>バンタンテックフォードアカデミーという学校と共同でエンジニアリング教育を行っています。
            一般的なスクールではプログラミングを教えたりするのみで、実際に必要な開発スキルは教えてもらえません。
            そのためスクール出身の人材は使えないというイメージが付いてしまっています。
            TEP では弊社で受けている案件をテクノスタンダードギルドのトップレベルのエンジニアと一緒に行うことで実際に必要なことを体験でき、 トップレベルの開発者のコードを読むことで動くだけのシステムではなく保守まで考えられた堅牢なシステム開発を経験できます。
            TEP参加希望者に向けた事前授業も行っており、スクールでは教えていないエンジニアの必須スキルである、コマンド操作、サーバー構築、git、設計の基礎などのできて当たり前の基礎技術を5日間で教えることも行っています。
          </p>
          <a className="blue" href="#">MORE</a>
        </div>
      </div>
    </Box>
  );
};

const sx: SxProps<Theme> = {
  "&.Service" : {
    width: "100%",
    fontSize: "16px",
    fontWeight: "400",
    padding: "60px 0"
  },
  "contents" : {
    width: "95%",
  },
  ".titleEn" : {
    fontSize: "48px",
    fontWeight: "600",
  },
  ".titleJP" : {
    fontSize: "24px",
    fontWeight: "600",
  },
};
