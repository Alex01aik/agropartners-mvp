import { useTranslations } from "next-intl";
import "./styles.css";

const InfoList: React.FC = () => {
  const t = useTranslations();

  return (
    <div id="infoList">
      <div className="infoContainer" data-aos="fade-right">
        <img className="infoImg" src="/fields.jpg" alt="fields" />
        <div
          className="info"
          style={{
            background: "darkgreen",
          }}
        >
          <span>{t("commonInfo1_1")}</span>
          <span>{t("commonInfo1_2")}</span>
        </div>
      </div>
      <div className="infoContainer" data-aos="fade-right">
        <img className="infoImg" src="/pig.jpg" alt="pig" />
        <div
          className="info"
          style={{
            background: "chocolate",
          }}
        >
          <span>{t("commonInfo2_1")}</span>
          <span>{t("commonInfo2_2")}</span>
          <span>{t("commonInfo2_3")}</span>
        </div>
      </div>
      <div className="infoContainer" data-aos="fade-right">
        <img className="infoImg" src="/seeds.jpg" alt="seeds" />
        <div
          className="info"
          style={{
            background: "burlywood",
          }}
        >
          <span>{t("commonInfo3_1")}</span>
          <span>{t("commonInfo3_2")}</span>
        </div>
      </div>
    </div>
  );
};

export default InfoList;
