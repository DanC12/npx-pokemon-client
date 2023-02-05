import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableContainer = styled(TableContainer)`
  margin-top: 5rem;
`;

const StyledTableCell = styled(TableCell)`
  &.${() => tableCellClasses.head} {
    background-color: ${() => "black"};
    color: ${({ theme }) => theme.palette.common.white};
    font-size: 16px;
  }

  &.${() => tableCellClasses.body} {
    font-size: 16px;
  }
`;

const StyledTableRow = styled(TableRow)`
  background-color: ${({ theme }) => theme.palette.action.hover};
`;

const buildRow = (pokemon) => {
  return {
    hp: pokemon.base.HP,
    attack: pokemon.base.Attack,
    defense: pokemon.base.Defense,
    speed: pokemon.base.Speed
  };
};

export default function PokemonTable(props) {
  const row = buildRow(props.pokemon);

  return (
    <StyledTableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">HP</StyledTableCell>
            <StyledTableCell align="center">Attack</StyledTableCell>
            <StyledTableCell align="center">Defense</StyledTableCell>
            <StyledTableCell align="center">Speed</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow key={row.id}>
            <StyledTableCell align="center">{row.hp}</StyledTableCell>
            <StyledTableCell align="center">{row.attack}</StyledTableCell>
            <StyledTableCell align="center">{row.defense}</StyledTableCell>
            <StyledTableCell align="center">{row.speed}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
}
