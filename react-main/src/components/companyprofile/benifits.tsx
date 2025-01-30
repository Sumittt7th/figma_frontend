import React from "react";
import { Box, Card, Typography } from "@mui/material";

// Sample Data with Image Paths from Public Folder
const benefits = [
  { logo: "./public/health.svg", title: "Full Health Care", description: "We believe in thriving communities and that starts with our team being happy and healthy." },
  { logo: "./public/perk2.svg", title: "Unlimited Vacation", description: "We believe you should have a flexible schedule that makes space for family, wellness, and fun." },
  { logo: "./public/perk3.svg", title: "Skill Development", description: "We believe in always learning and leveling up our skills. Whether it's a conference or online course." },
  { logo: "./public/perk4.svg", title: "Team Summits", description: "Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter." },
  { logo: "./public/perk5.svg", title: "Remote Working", description: "You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it." },
  { logo: "./public/perk6.svg", title: "Commuter Benefits", description: "We’re grateful for all the time and energy each team member puts into getting to work every day." },
  { logo: "./public/perk7.svg", title: "We give back.", description: "We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. " },
 
];

const Benefits = () => {
  return (
    <Box
      sx={{
        width: 1440,
        height: 714,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Heading Section */}
      <Box sx={{ textAlign: "left", width: 1192, marginBottom: "16px" ,  marginRight:"80px",}}>
        <Typography variant="h4" fontWeight="bold">
          Perks and Benefits
        </Typography>
        <Typography variant="body2" color="text.secondary">
          This job comes with several perks and benefits.
        </Typography>
      </Box>

      {/* Benefits Box */}
      <Box
        sx={{
          width: 1192,
          height: 474,
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
          padding: "16px",
          marginRight:"80px",
        }}
      >
        {benefits.map((item, index) => (
          <Card
            key={index}
            sx={{
              padding: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
              boxShadow: "none",
            }}
          >
            <Box
              component="img"
              src={item.logo}
              alt={item.title}
              sx={{ width: "40px", height: "40px", objectFit: "contain" }}
            />
            <Typography variant="h6" fontWeight="bold">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Benefits;
