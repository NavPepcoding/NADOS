import React from "react";
import styles from "./SkillsCard.module.css";

import PDFIcon from "../../assets/pdf.svg";
import { Rating } from "@material-ui/lab";
const SkillsCard = (props) => {
  const data = props.data;
  return (
    <div className={styles.skilscard_info}>
      <div className={styles.skillName}>{data.skillName}</div>
      <Rating size="small" name="read-only" value={data.rating} readOnly />
      {!data.isCertificate ? (
        <></>
      ) : (
        <div className={styles.pdfImg}>
          <a
            href={data.certificateLink}
            style={{
              display: "inherit",
            }}
          >
            <img src={PDFIcon} />
          </a>
        </div>
      )}
    </div>
  );
};

export default SkillsCard;
