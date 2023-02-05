import React, { useState } from "react";
import Card from "./Components/UI/Card";
import Header from "./Components/UI/Header";
import Main from "./Components/UI/Main";
import TypeSelector from "./Components/TypeSelector";
import PokemonList from "./Components/PokemonList";

function App() {
  const [currentType, setCurrentType] = useState("");

  const typeChangeHandler = (type) => {
    setCurrentType(type);
  };

  return (
    <>
      <Header>
        <h1>Pokédex</h1>
      </Header>
      <Main>
        <Card margin-top={"6rem"}>
          <TypeSelector type={currentType} onTypeChange={typeChangeHandler} />
          <PokemonList type={currentType} />
        </Card>
      </Main>
    </>
  );
}

export default App;
