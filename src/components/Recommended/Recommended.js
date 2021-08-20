import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Button,
} from "@material-ui/core";
import React from "react";
import Styles from "./Recommended.module.css";

function Recommended() {
   const recommendData=[{
    company:"Pepcoding Education Private Ltd",
    companyImage:"https://i2.wp.com/www.pepcoding.com/images/logo.png?resize=580%2C508&ssl=1",
    jobProfile:"React Developer",
    Duration:"10000/months",
    jobTypes:["Internship","Full time","Part Time"]
},{
    company:"Google",
    companyImage:"https://static01.nyt.com/images/2020/12/14/well/14google-photo/14google-photo-mediumSquareAt3X.jpg",
    jobProfile:"React Developer",
    Duration:"10000/months",
    jobTypes:["Internship"]
},{
    company:"MicroSoft",
    companyImage:"data:image/jpeg;base64,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",
    jobProfile:"React Developer",
    Duration:"10000/months",
    jobTypes:["Internship","Full time","Part Time"]
},{
    company:"Infosys",
    companyImage:"https://www.thehindubusinessline.com/info-tech/wy10me/article31640488.ece/ALTERNATES/PORTRAIT_355/BL22INFOSYS",
    jobProfile:"React Developer",
    Duration:"10000/months",
    jobTypes:["Internship","Full time"]
}]
  function truncate(str, n) {
    console.log(str);
    return str?.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <div className={Styles.recommended_container}>
      <Card>
        <CardHeader title={"Recommended"} />
        {recommendData.map((data) => {
          return (
            <Card className={Styles.recommend_card}>
              <CardHeader
                avatar={<Avatar src={data.companyImage}></Avatar>}
                title={
                  <p className={Styles.recommend_text}>
                    {truncate(data.company, 20)}
                  </p>
                }
                subheader={
                  <div>
                    <p className={Styles.recommend_text}>{data.jobProfile}</p>
                    <p className={Styles.recommend_text}>{data.Duration}</p>
                    <Button
                      color="primary"
                      variant="contained"
                      className={Styles.recommend_btn}
                    >
                      Apply
                    </Button>
                    <Button
                      className={
                        Styles.recommend_btn + " " + Styles.recommend_greybtn
                      }
                    >
                      Detail
                    </Button>
                  </div>
                }
              />
              <CardContent className={Styles.recommend_card_content}>
                {data.jobTypes.map((type) => {
                  return <div className={Styles.job_type}>{type}</div>;
                })}
              </CardContent>
            </Card>
          );
        })}
      </Card>
    </div>
  );
}

export default Recommended;
