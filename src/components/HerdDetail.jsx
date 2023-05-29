import * as React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./partials/Header";

import CropSquareRoundedIcon from "@mui/icons-material/CropSquareRounded";
import SquareRoundedIcon from "@mui/icons-material/SquareRounded";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./styles/HerdDetail.css";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function HerdDetail() {
  const [herd, setHerd] = useState({});
  const [auctioneer, setAuctioneer] = useState([]);
  const { id } = useParams();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const StyledRating = styled(Rating)({
    "& .MuiRating-iconFilled": {
      color: "#0e4056",
    },
    "& .MuiRating-iconHover": {
      color: "#bfc8c9",
    },
  });

  useEffect(() => {
    const getHerd = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/catalogue/${id}`,
      });
      setHerd(response.data);
    };
    getHerd();

    //Llamada para traer únicamente el auctioneer del herd seleccionado. Innecesario traerlos a todos. La llamada tiene que encontrar al escritorio por la FK de auctioneer del herd.

    const getAuctioneer = async () => {
      const response = await axios({
        method: "GET",
        url: `http://localhost:8000/auctioneers/3`,
      });
      console.log(response.data);
      setAuctioneer(response.data);
    };

    getAuctioneer();
  }, []);

  return (
    <>
      <Header />
      <Card className="herd-detail-card">
        <div className="herd-detail-card-header">
          <div className="left-side">
            <img
              src={`../img/${auctioneer.logo}`}
              alt=""
              className="logo-auctioneer"
            />
            <div>
              <h1>
                {herd.quantity} vacas de invernada {herd.breed}
              </h1>
              <h4>Villa Rodríguez, San José</h4>
            </div>
          </div>
          <button className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              display="block"
              id="Heart"
            >
              <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
            </svg>
          </button>
        </div>
        <div className="card-media"></div>
        <div>
          <p>{herd.description}</p>
        </div>
        <div className="card-actions"></div>
        <CardActions disableSpacing>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <div>
            <p>Method:</p>
            <p>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </p>
            <div className="ratings">
              <div className="class-type">
                <h3>CLASE</h3>
                <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  precision={1}
                  icon={<SquareRoundedIcon fontSize="inherit" />}
                  emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
                />
              </div>
              <div className="status">
                <h3>ESTADO</h3>
                <StyledRating
                  name="customized-color"
                  defaultValue={0}
                  precision={1}
                  icon={<SquareRoundedIcon fontSize="inherit" />}
                  emptyIcon={<CropSquareRoundedIcon fontSize="inherit" />}
                />
              </div>
            </div>
            <p>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </p>
            <p>
              Add rice and stir very gently to distribute. Top with artichokes
              and peppers, and cook without stirring, until most of the liquid
              is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
              reserved shrimp and mussels, tucking them down into the rice, and
              cook again without stirring, until mussels have opened and rice is
              just tender, 5 to 7 minutes more. (Discard any mussels that
              don&apos;t open.)
            </p>
            <p>
              Set aside off of the heat to let rest for 10 minutes, and then
              serve.
            </p>
          </div>
        </Collapse>
      </Card>
    </>
  );
}
