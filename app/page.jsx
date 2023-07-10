import React from "react";
import Card from "@/components/Card";

const url = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
}

async function Home() {
  const characters = await fetchCharacters();

  


  return (
    <div>
      <Card characters={characters} />
    </div>
  );
}

export default Home;
