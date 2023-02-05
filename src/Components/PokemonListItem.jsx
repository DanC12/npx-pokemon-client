import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Card from "./UI/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PokemonTable from "./PokemonTable";

const typeColors = {
  Normal: "#A8A77A",
  Fire: "#EE8130",
  Water: "#6390F0",
  Electric: "#F7D02C",
  Grass: "#7AC74C",
  Ice: "#96D9D6",
  Fighting: "#C22E28",
  Poison: "#A33EA1",
  Ground: "#E2BF65",
  Flying: "#A98FF3",
  Psychic: "#F95587",
  Bug: "#A6B91A",
  Rock: "#B6A136",
  Ghost: "#735797",
  Dragon: "#6F35FC",
  Dark: "#705746",
  Steel: "#B7B7CE",
  Fairy: "#D685AD"
};

const StyledChip = styled(Chip)`
  color: white;
  background-color: ${(props) =>
    props.backgroundcolor ? props.backgroundcolor : "black"};
  width: 5rem;
  margin: 0.2rem;
`;
const ExpandMore = styled(IconButton)`
  transform: ${(props) => (props.expand ? "rotate(180deg)" : "rotate(0deg)")};
  margin-left: auto;
  transition: ${({ theme }) =>
    theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })};
`;

export default function PokemonListItem(props) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card margin-top={"2rem"}>
      <CardHeader
        avatar={
          <Avatar
            src={`http://localhost:3001/thumbnails/${props.pokemon.id}`}
          />
        }
        title={`${props.pokemon.name.english}`}
        subheader={
          <>
            {`${props.pokemon.id} - `}
            {props.pokemon.type.map((type) => (
              <StyledChip
                key={type}
                label={type}
                backgroundcolor={`${typeColors[type]}`}
              />
            ))}
          </>
        }
      />
      <CardActions>
        <ExpandMore expand={expanded ? 1 : 0} onClick={handleExpandClick}>
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <PokemonTable pokemon={props.pokemon} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
