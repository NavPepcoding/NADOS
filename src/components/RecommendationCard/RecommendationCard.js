import { Avatar, Button, Typography } from "@material-ui/core";
import React from "react";
import styles from "./RecommendationCard.module.css";
import { IconButton } from "@material-ui/core";
import VideoIcon from "../../assets/videoButton.svg";

const RecommendationCard = (props) => {
  const data = props.data;
  console.log(data);
  return (
    <div className={styles.recommend__card}>
      <div className={styles.userProfilePhoto}>
        <Avatar src={data.userPhoto} />
      </div>
      <div className={styles.recommend}>
        <div className={styles.recommender__info}>
          <div className={styles.username}>{data.username}</div>
          <div className={styles.userPosition}>{data.userPosition}</div>
        </div>
        <div className={styles.recommended__content}>
          {data.recommendComment}
        </div>

        <div className={styles.watchVideo__btn}>
          <div className={styles.video__log}>
            <img src={VideoIcon} />
          </div>
          <div className={styles.watchBtn__text}>Watch Video</div>
        </div>
      </div>
    </div>
  );
};

export default RecommendationCard;
