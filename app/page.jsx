"use client";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { agregarPersonaje } from "@/store/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";

const url = "https://rickandmortyapi.com/api/character";

function Home() {
  const [foundCharacter, setFoundCharacter] = useState([]);
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.valores.characters);

  async function searchHandler(id) {
    try {
      const found = foundCharacter.find((char) => char.id === Number(id));

      if (!found) {
        const response = await fetch(`${url}/${id}`);
        const foundCharacterData = await response.json();
        if (foundCharacterData.name) {
          setFoundCharacter((prevState) => [...prevState, foundCharacterData]);
          dispatch(agregarPersonaje(foundCharacterData));
        } else {
          window.alert("Personaje no encontrado");
        }
      } else {
        window.alert("El personaje ya fue agregado");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  useEffect(() => {
    setFoundCharacter(characters);
  }, [characters]);

  console.log();
  return (
    <div>
      <SearchBar searchHandler={searchHandler} />
      <Card foundCharacter={foundCharacter} />
    </div>
  );
}

export default Home;
