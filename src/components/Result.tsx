import React from "react";
import Typography from "@mui/material/Typography";

function Result() {
  return (
    // <div style={{
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     height: "100vh",
    //     flexDirection: "column",
    //     width: "100%",
    //     padding: "10px",
    //     backgroundColor:"#F4F4F4",
    //     margin: 0,

    // }} id="result">
    <div
      style={{
        backgroundColor: "#490874",
        width: "100%",
        height: "100%",
        color: "white",
        borderRadius: "50%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          flexDirection: "column",
          width: "100%",
        }}
      >
        <Typography variant="h6" textAlign="center" fontFamily="Montserrat">
          Your Accent is:
        </Typography>
        <Typography variant="h4" textAlign="center" fontFamily="Montserrat">
          AMERICAN
        </Typography>
      </div>
    </div>

    // </div>
  );
}

export default Result;
