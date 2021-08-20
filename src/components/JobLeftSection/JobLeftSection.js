import React from "react";
import styles from "./JobLeftSection.module.css";
import companyLogo from '../../assets/CompanyLogo.svg'
import jobpostPoster from '../../assets/jobpostPoster.svg'
import JobPostCard from "../JobPostCard/JobPostCard";
const JobLeftSection = () => {
 const dummyData = [
    {
        companyName : "Google",
        companyLogo : companyLogo,
        jobPositions : [
            "Full Time",
            "Part-time"
        ],
        jobDescription : {
            Role : "UI/UX developer",
            Experience: "2-3yrs",
            Salary: "10000/month",
            Location: "Hyderabad,Delhi,Noida Gujarat, Greater Noida"
        },
        videoLink : "www.google.com",
        videoPosterImg : jobpostPoster,
        PostedBy: "Mr. Navjot Singh",
        ApplyLink: "www.google.com",
    },
    {
        companyName : "MicroSoft",
        companyLogo : companyLogo,
        jobPositions : [
            "Full Time",
        ],
        jobDescription : {
            Role : "UI/UX developer",
            Experience: "2-3yrs",
            Salary: "10000/month",
            Location: "Hyderabad,Delhi,Noida Gujarat, Greater Noida"
        },
        videoLink : "www.google.com",
        videoPosterImg : jobpostPoster,
        PostedBy: "Mr. Navjot Singh",
        ApplyLink: "www.google.com",
    },
    {
        companyName : "Google",
        companyLogo : companyLogo,
        jobPositions : [
        ],
        jobDescription : {
            Role : "UI/UX developer",
            Experience: "2-3yrs",
            Salary: "10000/month",
            Location: "Hyderabad,Delhi,Noida Gujarat, Greater Noida"
        },
        videoLink : "www.google.com",
        videoPosterImg : jobpostPoster,
        PostedBy: "Mr. Navjot Singh",
        ApplyLink: "www.google.com",
    },
 ]
  return (
    <div className={styles.leftSection}>
      <div className={styles.sectionheader__name}>Search for Jobs</div>

      <div className={styles.searchFilter}></div>

      <div className={styles.jobCard__container}>
        {
            dummyData.map((data)=>{
               return (
                   <JobPostCard data={data} />
               ) 
            })
        }
      </div>
    </div>
  );
};

export default JobLeftSection;
