import React from "react";
import {
  Card,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Button,
  CardActions,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import "./HRDashboard.css";

import maleAvatar from "../../../images/male.svg";
import femaleAvatar from "../../../images/female.svg";

import { applicantArr } from "../../../datasets/hrdashboard";

const useStyles = makeStyles((theme) => ({
  topCards: {
    width: 200,
    height: 100,
    position: "relative",
  },
}));

const HRDashboard = () => {
  const classes = useStyles();

  const [applicants, setApplicants] = React.useState([]);
  return (
    <>
      <div className="hr-topcards">
        <Card elevation={4} className={classes.topCards}>
          <div className="top-card-text-container">
            <div className="top-card-title">Uploaded Posts</div>
            <div className="top-card-number"> 12 </div>
          </div>
        </Card>
        <Card elevation={4} className={classes.topCards}>
          <div className="top-card-text-container">
            <div className="top-card-title"> Applicants</div>
            <div className="top-card-number"> 102 </div>
          </div>
        </Card>
        <Card elevation={4} className={classes.topCards}>
          <div className="top-card-text-container">
            <div className="top-card-title"> Applicants Selected</div>
            <div className="top-card-number"> 30 </div>
          </div>
        </Card>
      </div>

      <div className="job-selection">
        <Card elevation={5} className="posts-available-card">
          <h3 className="job-selection-titles"> Positions Available</h3>
          <List>
            {applicantArr.map((text, index) => (
              <>
                <Divider component="li" />
                <ListItem
                  button
                  key={text.position}
                  onClick={() => setApplicants(text.applicants)}
                >
                  <ListItemText primary={text.position} />
                </ListItem>
              </>
            ))}
          </List>
        </Card>
        <Carousel
          animation="slide"
          autoPlay={false}
          navButtonsAlwaysVisible
          indicatorProps={{ style: { fontSize: ".5rem" } }}
          activeIndicatorProps={{ style: { fontSize: ".5rem" } }}
        >
          {applicants.map((item) => (
            <Card elevation={5} className="applicants-available-card">
              <h3 className="job-selection-titles"> Applicants</h3>
              <div className="applicants-title-container">
                <Divider />
                <br />
                <img src={maleAvatar} />
                <div className="applicant-details-container">
                  <p> Name : {item.name} </p>
                  <p> CGPA : {item.CGPA} </p>
                </div>
              </div>
              <CardActions>
                <Button color="primary">Accept</Button>
                <Button color="primary">Reject</Button>
              </CardActions>
            </Card>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default HRDashboard;
