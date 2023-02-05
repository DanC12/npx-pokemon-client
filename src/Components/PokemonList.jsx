import React, { useState, useEffect, useCallback } from "react";
import Pagination from "@mui/material/Pagination";
import { styled } from "@mui/material/styles";
import PokemonListItem from "./PokemonListItem";

const PokemonList = (props) => {
  const StyledPaginator = styled(Pagination)`
    margin: auto;
    padding-top: 10px;
  `;

  const [pokemon, setPokemon] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const getPokemonHandler = useCallback(async (type) => {
    const response = await fetch(`http://localhost:3001/pokemon/${type}`);
    setPokemon(await response.json());
  }, []);

  const pageChangeHandler = (event, page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (props.type) {
      getPokemonHandler(props.type).then(() => {
        setCurrentPage(1);
      });
    }
  }, [props.type, getPokemonHandler]);

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const visiblePokemon = pokemon.slice(startIndex, endIndex);

  const noTypeSelected = <p>Please select a type to see a list of Pokémon.</p>;

  const typeSelected = (
    <>
      {visiblePokemon.map((pkmn) => (
        <PokemonListItem key={pkmn.id} pokemon={pkmn} />
      ))}
      <StyledPaginator
        count={Math.ceil(pokemon.length / rowsPerPage)}
        size="large"
        page={currentPage}
        onChange={pageChangeHandler}
      />
    </>
  );

  return (
    <>
      {!props.type && noTypeSelected}
      {props.type && typeSelected}
    </>
  );
};

export default PokemonList;
