import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function HerdCard({ herd }) {
  const handleOpen = () => alert("link a detalle del lote");

  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea onClick={handleOpen}>
          <CardMedia
            component="img"
            height="140"
            image="img/vacaslecheras.jpeg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {herd.quantity} {herd.category} vacas {herd.breed}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {herd.location} Puntas de Valdez, San José
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
