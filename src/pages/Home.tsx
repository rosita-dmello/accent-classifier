import React from "react";
import Recorder from "voice-recorder-react";
import { Typography, Card, Grid } from "@mui/material";
import Result from "../components/Result";

import RecorderUI from "../RecorderUI";

function Home() {
    const [showResult, setShowResult] = React.useState<boolean>(false);
  return (
    <div
      style={{
        alignItems: "right",
        minHeight: "80vh",
        margin: 0,
      }}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            padding: 5,
          }}
        >
          <div
            style={{
              width: "75%",
              margin: 2,
            }}
          >
            <Typography
              variant="h1"
              sx={{
                mb: 2,
                ml: 10,  
                textAlign: "left",
                color: "white",
                fontFamily: "Lato",
              }}
            >
              Accent Recognition like Never Before.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",

        }}>
          <Card
            sx={{
              width: "300px",
              height: "300px",
              marginRight: 5,
              marginTop: 5,
              px: "2rem",
              py: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            {
                showResult ? <Result /> : <Recorder Render={RecorderUI}/>
            }
            
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
