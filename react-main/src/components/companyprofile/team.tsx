import React from "react";
import { Box, Card, Typography, IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const teamMembers = [
  { name: "John Doe", role: "Software Engineer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Jane Smith", role: "Product Manager", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Alex Brown", role: "UI/UX Designer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Emily White", role: "Data Scientist", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Michael Lee", role: "DevOps Engineer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
];

const TeamComponent = () => {
  return (
    <Box
      sx={{
        width: 1440,
        height: 436,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2px",
       
      }}
    >
      {/* Header Box */}
      <Box
        sx={{
          width: 1192,
          height: 38,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px",
          backgroundColor: "#fff",
          marginRight:"80px",
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Team
        </Typography>
        <Link href="#" sx={{ fontSize: "14px", textDecoration: "none", color: "blue" }}>
          See All
        </Link>
      </Box>

      {/* Team Cards Box */}
      <Box
        sx={{
          width: 1192,
          height: 243,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "16px",
          backgroundColor: "#fff",
          marginRight:"80px",
        }}
      >
        {teamMembers.map((person, index) => (
          <Card
            key={index}
            sx={{
              width: 220,
              height: 243,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "16px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Box
              component="img"
              src={person.img}
              alt={person.name}
              sx={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "12px",
              }}
            />
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {person.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ marginBottom: "8px" }}>
              {person.role}
            </Typography>
            {/* Social Icons */}
            <Box>
              <IconButton>
                <LinkedInIcon color="primary" />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ color: "#C13584" }} />
              </IconButton>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default TeamComponent;
