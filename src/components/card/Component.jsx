import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Score from "./Score";
import styles from "./Component.module.css";
//  import imag1 from "";

function Component() {

  var items = [
    {
      src: "https://avatars.dicebear.com/api/male/.svg",
      name: "John Snow",
      score: 25.01,
    },
    {
      src: "https://avatars.dicebear.com/api/male/.svg",
      name: "Michael Scofild",
      score: 25.5,
    },
    {
      src: "https://avatars.dicebear.com/api/male/.svg",
      name: "Vansh",
      score: 25.2,
    },
  ];

  return (
    <div className={styles.main}>
      <div className={styles.rightsidebar}>
        <Card className={styles.root}>
          <CardContent>
            <Typography style={{ fontWeight: "bold", fontSize: "16px" }}>
              Top community engager (TCE)
            </Typography>
          </CardContent>

          {items.map((data) => {
            return <Score data={data} />;
          })}
        </Card>

        <div className={styles.score}>
          <Typography className={styles.engagement}>
            Your enagagement score
          </Typography>
          <Typography className={styles.totalscore}> 100</Typography>
        </div>
      </div>
    </div>
  );
}

export default Component;
