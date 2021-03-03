import React from "react";
import { Card, CardContent, CardActions, Button } from "@material-ui/core";
import Axios from "axios";

import "./JobPosts.css";

const JobPosts = () => {
  return (
    <>
      <div>
        <Card elevation={1} className="jobposts-card">
          <CardContent>
            <h2> Senior Developer </h2>
            <div>
              <div className="jobposts-inner-flex-container">
                <div>
                  <h5> START DATE </h5>
                  <p> 25th March' 21 </p>
                </div>
                <div>
                  <h5> SALARY(ANNUALY) </h5>
                  <p> 8-9 lakh </p>
                </div>
                <div>
                  <h5> APPLY BY </h5>
                  <p> 9th March' 21 </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardActions>
            <div style={{ textAlign: "right", width: "100%" }}>
              <Button color="primary">More Details ></Button>
            </div>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default JobPosts;
