import { Avatar, Button, Icon } from "@material-ui/core";
import React from "react";
import styles from './JobPostCard.module.css'
import SendIcon from '@material-ui/icons/Send';
import Share from "@material-ui/icons/Share";
import { Visibility } from "@material-ui/icons";
import { MoreVert } from "@material-ui/icons";

const JobPostCard = (props) => {
  const data = props.data;

  return (
    <div className={styles.JobPostCard__container}>
      <div className={styles.jobcardInfo__container}>
        <div className={styles.job__info}>
          <div className={styles.companyLogo__profiles}>
            <Avatar className={styles.userPhoto} src={data.companyLogo} />
            <div className={styles.position__container}>
              {data.jobPositions.map((profile) => {
                console.log(profile);
                return <ProfilePosition profile={profile} />;
              })}
            </div>
          </div>
          <div className={styles.companyprofile__info}>
            <div className={styles.companyName}>{data.companyName}</div>
            <div className={styles.role__info}>
              Role:
              <span className={styles.info__span}>
                {" " + data.jobDescription.Role}
              </span>
            </div>
            <div className={styles.role__info}>
              Experience:
              <span className={styles.info__span}>
                {" " + data.jobDescription.Experience}
              </span>
            </div>
            <div className={styles.role__info}>
              Salary:
              <span className={styles.info__span}>
                {" " + data.jobDescription.Salary}
              </span>
            </div>
            <div className={styles.role__info}>
              Location:
              <span className={styles.info__span}>
                {" " + data.jobDescription.Location}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.footer}>
          <Button
            size="small"
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
          >
            Apply
          </Button>
          <Button
            className={styles.jobPost__btn}
            size="small"
            color="white"
            variant="contained"
            endIcon={<Share />}
          >
            Share
          </Button>
          <Button
            className={styles.jobPost__btn}
            size="small"
            variant="contained"
            endIcon={<Visibility />}
          >
            Detials
          </Button>
          <Button
            className={styles.jobPost__btn}
            size="small"
            variant="contained"
            endIcon={<MoreVert />}
          >
            More
          </Button>
        </div>
      </div>

      <div className={styles.video__container}>
        <img className={styles.videoImg} src={data.videoPosterImg} />
        <div className={styles.postBy}>Posted By: {data.PostedBy}</div>
      </div>
    </div>
  );
};

const ProfilePosition = (props) => {
  const profile = props.profile;
  return <div className={styles.profile__btn}>{profile}</div>;
};

export default JobPostCard;
