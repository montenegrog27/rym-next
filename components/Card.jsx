"use client";
import { useRouter } from "next/navigation";

function Card({ foundCharacter }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 gap-2">
      {foundCharacter.map((character) => {
        return (
          <li
            className="card lg:card-side bg-base-100 shadow-xl"
            onClick={() => {
              router.push(`/details/${character.id}`);
            }}
          >
            <figure>
              <img src={character.image} alt={character.species} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{character.name}</h2>
              <h2 className="card-title">{character.species}</h2>
              <h2 className="card-title">{character.gender}</h2>
              <div className="card-actions justify-end">
                <button className="btn text-gray-100 text-xl bg-green-500">
                  Detalles
                </button>
              </div>
            </div>
          </li>
        );
      })}
    </div>
  );
}

export default Card;
