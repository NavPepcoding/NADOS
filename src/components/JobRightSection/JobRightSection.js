import React from "react";
import styles from "./JobRightSection.module.css";
import Recommended from "../Recommended/Recommended";

const JobRightSection = () => {
  return (
    <div className={styles.JobRightSection}>
      <div className={styles.postJob}>
        <div className={(styles.status__btn, styles.righrSectionBtn)}>
          Applied Status
        </div>
        <div className={(styles.postJob__btn, styles.righrSectionBtn)}>
          Post a Job
        </div>
      </div>
      <Recommended />
    </div>
  );
};

export default JobRightSection;
