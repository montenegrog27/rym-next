"use client";
import React, { useEffect } from "react";
import Card from "@/components/Card";
import SearchBar from "@/components/SearchBar";
import { TraerPersonajes } from "@/store/slice";
import { useDispatch } from "react-redux";
import { useState } from "react";
// import { useSelector } from "react-redux";

const url = "https://rickandmortyapi.com/api/character";

function Home() {
  // let characs = useSelector((state) => state.valores.characters);
  const [foundCharacter, setFoundCharacter] = useState([]);
  const dispatch = useDispatch();

  async function searchHandler(id) {
    try {
      const found = foundCharacter.find((char) => char.id === Number(id));

      if (!found) {
        const response = await fetch(`${url}/${id}`);
        const foundCharacterData = await response.json();
        if (foundCharacterData.name) {
          setFoundCharacter((prevState) => [...prevState, foundCharacterData]);
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
    dispatch(TraerPersonajes(foundCharacter));
  }, [foundCharacter, dispatch]);

  console.log();
  return (
    <div>
      <SearchBar searchHandler={searchHandler} />
      <Card foundCharacter={foundCharacter} />
    </div>
  );
}

export default Home;

// const [foundCharacter, setFoundCharacter] = useState([]);

// async function searchHandler(id) {
//   try {
//     const found = foundCharacter.find((char) => char.id === Number(id));

//     if (!found) {
//       const response = await fetch(`${url}/${id}`);
//       const foundCharacterData = await response.json();
//       if (foundCharacterData.name) {
//         setFoundCharacter((oldChars) => [foundCharacterData, ...oldChars]);
//       } else {
//         window.alert("Personaje no encontradooo");
//       }
//     } else {
//       window.alert("El personaje ya fue agregado");
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }
// useEffect(() => {
//   foundCharacter;
// }, []);
