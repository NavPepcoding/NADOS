import { Typography } from "@material-ui/core";
import React from "react";
import styles from "./Skills.module.css";
import SkillsCard from "../SkillsCard/SkillsCard";

const Skills = () => {
  const dummyData = [
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: false,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: false,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: false,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: false,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
    {
      skillName: "JavaScript",
      rating: 4,
      isCertificate: true,
      certificateLink: "www.google.com",
    },
  ];
  return (
    <div className={styles.skills__container}>
      <div className={styles.sectionName}>SKILLS</div>
      <div className={styles.skills__cards}>
        {dummyData.map((data) => {
          return (
            <SkillsCard data={data} />
          );
        })}

      </div>
    </div>
  );
};

export default Skills;
