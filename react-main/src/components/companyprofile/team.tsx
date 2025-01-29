import React from "react";
import { Box, Card, Typography } from "@mui/material";

const teamMembers = [
  { name: "John Doe", role: "Software Engineer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Jane Smith", role: "Product Manager", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Alex Brown", role: "UI/UX Designer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Emily White", role: "Data Scientist", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
  { name: "Michael Lee", role: "DevOps Engineer", img: "https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" },
];

const Team: React.FC = () => {
  return (
    <Box
      sx={{
        height: "1192px",
        width: "1243px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
       
      }}
    >
      {teamMembers.map((person, index) => (
        <Card
          key={index}
          sx={{
            width: "220px",
            height: "300px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Box
            component="img"
            src={person.img}
            alt={person.name}
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              objectFit: "cover",
              marginBottom: "12px",
            }}
          />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.role}
          </Typography>
        </Card>
      ))}
    </Box>
  );
};

export default Team;
