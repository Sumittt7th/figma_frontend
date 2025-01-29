import React from "react";
import { Box, Typography } from "@mui/material";

const LoadingPage: React.FC = () => {
  return (
    <Box
      sx={{
        width: "1440px",
        height: "1256px",
        padding: "72px 124px",
        gap: "64px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box
  sx={{
    width: "552px",
    height: "1002px",
    gap: "20px", 
    display: "flex",
    flexDirection: "column",
    
  }}
>
<Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap:"38px",
  }}
>
  <Box
    sx={{
      height: "288px", 
      display: "flex",
      flexDirection: "column", 
    }}
  >
    <Typography variant="h6" sx={{ fontWeight: "bold" ,fontSize:"30px"}}>Company Profile</Typography>
    <Typography sx={{}}>Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.</Typography>
  </Box>

  <Box
  sx={{
    height: "154px",
    display: "flex",
    flexDirection: "column",
  }}
>
  {/* Bold Contact Title */}
  <Typography variant="h6" sx={{ fontWeight: "bold",fontSize:"30px" }}>
    Contact
  </Typography>

  {/* Links Section */}
  <Box sx={{ display: "flex", flexDirection: "row", gap: "8px", marginTop: "8px" }}>
    <a href="#" color="primary" >
      twitter.com/stripe
      </a>
      <a href="#" color="primary" >
     instagram.com/stripe
      </a>
      <a href="#" color="primary" >
      linkdlin.com/stripe
      </a>
  </Box>
</Box>

</Box>


<Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    
  }}
>
  
  <Box
    sx={{
      display: "flex",
      flexDirection: "row",
      gap: "5px",
      height: "100%", 
    }}
  >
    <Box
      sx={{
        width: "50%", 
        
      }}
    >
      <img
      src="./public/leon-6awfTPLGaCE-unsplash.svg"
      alt="First Image"
      style={{
        width: "100%", 
        height: "100%",
        objectFit: "cover",
      }} />
    </Box>

    <Box
  sx={{
    width: "50%",
    display: "flex",
    flexDirection: "column",
    gap: "2px",
  }}
>
 
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: "2px", 
    }}
  >
    <img
      src="./public/leon-6awfTPLGaCE-unsplash.svg"
      alt="First Image"
      style={{
        width: "100%", 
        height: "auto", 
      }}
    />
    <img
      src="./public/leon-bzqU01v-G54-unsplash 1.svg" 
      alt="Second Image"
      style={{
        width: "100%", 
        height: "auto", 
      }}
    />
    <img
      src="./public/Mask Group.svg" 
      alt="Third Image"
      style={{
        width: "100%",
        height: "auto", 
      }}
    />
  </Box>
</Box>

  </Box>
</Box>

</Box>


<Box
  sx={{
    width: "346px",
    height: "880px",
    display: "flex",
    flexDirection: "column",
  }}
>
  <Box
    sx={{
      flex: 1,
    }}
  >
    <Typography variant="h6" sx={{fontWeight:"bold",fontSize:"30px"}}>Tech Stacks</Typography>
    <Typography>Learn about the techenology and tools that Stripe Use</Typography>
    <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "12px",
      width: "100%",
      justifyContent: "center",
      marginTop:"40px"
    }}
  >
    {[
      { name: "HTML", img: "https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png" },
      { name: "CSS", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2B0jgb556iB3bft4AYqEReM2wopQYyxYWmQ&s" },
      { name: "JavaScript", img: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png" },
      { name: "Ruby", img: "https://cdn-icons-png.flaticon.com/512/919/919842.png" },
      { name: "Mixpanel", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeTN9ZqhM67CXGEba_e0lCTv8Bc1_B2pMDSw&s" },
      { name: "Framer", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQXPIeLRKNjDKY8JKpww2Y2Zyfi7JK7ZczZA&s" },
    ].map((tech, index) => (
      <Box
        key={index}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={tech.img}
          alt={tech.name}
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",
          }}
        />
        <Typography sx={{ fontSize: "14px", marginTop: "8px" }}>
          {tech.name}
        </Typography>
      </Box>
    ))}
  </Box>

  <a href="#" color="primary" >
    View All Stacks
  </a>
  </Box>

  <Box
  sx={{
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "16px",
  }}
> <Typography variant="h6" sx={{fontWeight:"bold",fontSize:"30px"}}>Office Location</Typography>
  <Typography>Stripes offices spread across20 countries</Typography>
  {[
    { name: "USA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwwxhCMpFSg4qToHq_HKLhhU6bo5f1JJPh8w&s" },
    { name: "Canada", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pnZ5YQ2rAWXaSPccHGMX5CPGuqj4-bIivg&s" },
    { name: "UK", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN6NjUzMsxiPYELyWrKg17MA4eLo47fkkM2w&s" },
    { name: "Germany", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWexmjbxTYlNasCFKRuc2ye99ekuwjXePd8w&s" },
    { name: "Australia", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQT_K0zXpTtFrzz1KPWuXpKaRj0nVBvC-ppw&s" },
  ].map((country, index) => (
    <Box
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "100%",
        marginBottom: "12px",
      }}
    >
      <img
        src={country.img}
        alt={country.name}
        style={{
          width: "40px",
          height: "40px",
          objectFit: "contain",
        }}
      />
      <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
        {country.name}
      </Typography>

     
    </Box>
  ))}
   
</Box>

</Box>



      
    </Box>
  );
};

export default LoadingPage;
