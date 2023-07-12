"use client";

import { useState } from "react";

function SearchBar(props) {
  const { searchHandler } = props;
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className=" flex p-2 bg-neutral-700 justify-end">
      <div className="form-control">
        <div className="input-group">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Agregar personaje"
            className="input input-bordered"
          />
          <button
            className="btn btn-square"
            onClick={() => {
              searchHandler(id);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

// const [id, setIde] = useState("");
// const [foundCharacter, setFoundCharacter] = useState([]);

// async function searchHandler(id) {
//   const found = foundCharacter.find((char) => char.id === Number(id));

//   try {
//     if (!found) {
//       const response = await fetch(`${url}/${id}`);
//       const foundCharacterData = await response.json();
//       if (foundCharacterData.name) {
//         setFoundCharacter(foundCharacterData);
//       } else {
//         setFoundCharacter(null);
//         window.alert("Personaje no encontrado");
//       }
//     } else {
//       setFoundCharacter(null);
//       window.alert("Personaje no encontrado");
//     }
//   } catch (error) {
//     alert(error.message);
//   }
// }
