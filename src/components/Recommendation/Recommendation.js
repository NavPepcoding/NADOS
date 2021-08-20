import { Typography } from "@material-ui/core";
import React from "react";
import RecommendationCard from "../RecommendationCard/RecommendationCard";
import styles from "./Recommendation.module.css";
import testingpic from '../../assets/testingpic.svg'
const Recommendation = () => {
  const dummyData = [
    {
      userPhoto: testingpic,
      username: "Navjot Singh",
      userPosition: "Software Engineer - Google",
      recommendComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ard dummy text ever.",
    },
    {
      userPhoto: testingpic,
      username: "Navjot Singh",
      userPosition: "Software Engineer - Google",
      recommendComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ard dummy text ever.",
    },
    {
      userPhoto: testingpic,
      username: "Navjot Singh",
      userPosition: "Software Engineer - Google",
      recommendComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ard dummy text ever.",
    },
    {
      userPhoto: testingpic,
      username: "Navjot Singh",
      userPosition: "Software Engineer - Google",
      recommendComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ard dummy text ever.",
    },
    {
      userPhoto: testingpic,
      username: "Navjot Singh",
      userPosition: "Software Engineer - Google",
      recommendComment:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's stand ard dummy text ever.",
    },
  ];
  return (
    <div className={styles.recommed__container}>
      <Typography variant="h4">Recommendation</Typography>
      <div className={styles.recommendationCards__container}>
        {dummyData.map((data) => {
          return <RecommendationCard data={data} />;
        })}
      </div>
    </div>
  );
};

export default Recommendation;
