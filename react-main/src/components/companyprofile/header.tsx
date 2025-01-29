import React from "react";
import { Box, Typography } from "@mui/material";

const MyComponent = () => {
  return (
    <Box
      sx={{
        height: "346px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "column",
      }}
    >
     
      <Typography
        sx={{
          width: "219px",
          height: "26px",
          position: "absolute",
          top: "118px",
          left: "125px",
          fontFamily: "Epilogue",
          fontSize: "16px",
          fontWeight: 400,
          lineHeight: "25.6px",
          textAlign: "left",
          textDecorationSkipInk: "none",
          opacity: 1,
        }}
      >
        Home / Companies / Nomad
      </Typography>

      
      <Box
        sx={{
          width: "999px",
          height: "189px",
          position: "absolute",
          top: "184px",
          left: "125px",
          gap: "24px", 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "24px",
            marginTop: "1px", 
          }}
        >
         
          <Box
            sx={{
              width: "167px",
              height: "167px",
              marginTop:"10px",
            }}
          >
           <img 
    src="/public/companylogo.png" 
    alt="Description" 
    style={{
      width: "100%", 
      height: "100%", 
      objectFit: "cover"
    }} 
  /> 
          </Box>
<Box
  sx={{
    width: "786px",
    height: "167px",
    display: "flex",
    flexDirection: "column",
    gap: "20px", 
    alignItems: "flex-start", 
    padding: "10px",
  }}
>

  <Box
  sx={{
    width: "245px",
    height: "91px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", 
    justifyContent: "flex-start", 
    padding: "10px",
  }}
>
  {/* Container for "Stripe" and "43 Jobs" in one row */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "row", 
      alignItems: "center",
      gap: "12px", 
    }}
  >
    {/* Heading: Stripe */}
    <Typography
      sx={{
        fontFamily: "Clash Display Variable",
        fontSize: "48px",
        fontWeight: 600,
        lineHeight: "52.8px",
        textAlign: "left",
        textDecorationSkipInk: "none",
      }}
    >
      Stripe
    </Typography>

    {/* Subtext: 43 Jobs */}
    <Typography
      sx={{
        fontFamily: "Epilogue",
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: "25.6px",
        textAlign: "left",
        textDecorationSkipInk: "none",
      }}
    >
      43 Jobs
    </Typography>
  </Box>

  {/* Link: https://stripe.com */}
  <Typography
    sx={{
      fontFamily: "Epilogue",
      fontSize: "16px",
      fontWeight: 600, 
      lineHeight: "25.6px",
      textAlign: "left",
      textDecorationSkipInk: "none",
      marginTop: "12px", 
    }}
  >
    <a href="https://stripe.com" target="_blank" rel="noopener noreferrer">
      https://stripe.com
    </a>
  </Typography>
</Box>


  
  <Box
  sx={{
    width: "770px",
    height: "52px",
   
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between", 
    padding: "0 10px",
  }}
>

  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img 
      src="/public/Icon.png" 
      alt="Founded Logo" 
      style={{
        width: "24px",
        height: "24px",
        marginRight: "8px", 
      }} 
    />
    <Typography>Founded</Typography>
  </Box>


  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img 
      src="/public/Icon3.png" 
      alt="Location Logo" 
      style={{
        width: "24px",
        height: "24px",
        marginRight: "8px", 
      }} 
    />
    <Typography>Employees</Typography>
  </Box>


  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img 
      src="/public/Icon2.png" 
      alt="Employee Logo" 
      style={{
        width: "24px",
        height: "24px",
        marginRight: "8px", 
      }} 
    />
    <Typography>Location</Typography>
  </Box>

 
  <Box sx={{ display: "flex", alignItems: "center" }}>
    <img 
      src="/public/location.png" 
      alt="Company Logo" 
      style={{
        width: "24px",
        height: "24px",
        marginRight: "8px", 
      }} 
    />
    <Typography>Industry</Typography>
  </Box>
</Box>

</Box>


        </Box>
      </Box>
    </Box>
  );
};

export default MyComponent;
