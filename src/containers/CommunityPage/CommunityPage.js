import React from "react";
import FeedHeader from "../../components/FeedHeader/FeedHeader";
import JobLeftSection from "../../components/JobLeftSection/JobLeftSection";
import JobRightSection from "../../components/JobRightSection/JobRightSection";
import styles from "./CommunityPage.module.css";
const CommunityPage = () => {
  return (
    <>
      <FeedHeader></FeedHeader>
      <div className={styles.sections__container}>
        <div className={styles.container}>
          <JobLeftSection />
          <JobRightSection />
        </div>
      </div>
    </>
  );
};

export default CommunityPage;
