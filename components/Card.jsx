"use client";
import { useRouter } from "next/navigation";

function Card({ characters, foundCharacter }) {
  const router = useRouter();

  if (foundCharacter) {
    const { id, image, name, species, gender } = foundCharacter;

    return (
      <div className="grid grid-cols-4 gap-2">
        <li className="card lg:card-side p-2">
          <div
            className="card lg:card-side bg-base-100 shadow-xl"
            onClick={() => {
              router.push(`/details/${id}`);
            }}
          >
            <figure>
              <img src={image} alt={species} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <h2 className="card-title">{species}</h2>
              <h2 className="card-title">{gender}</h2>
              <div className="card-actions justify-end">
                <button className="btn text-gray-100 text-xl bg-green-500">
                  Detalles
                </button>
              </div>
            </div>
          </div>
        </li>
      </div>
    );
  }

  // Si no se encontró ningún personaje, puedes mostrar un mensaje o dejarlo en blanco
  return null;
}

export default Card;

{
  /* <div className="avatar">
  <div className="w-24 mask mask-squircle">
    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div>; */
}

// function Card({ characters }) {
//   const router = useRouter();
//   return (
//     <div className=" grid grid-cols-5 gap-4 p-2">
//       {characters.map((char) => (
//         <li
//           className="avatar flex flex-col items-center justify-center bg-neutral-800 rounded-[30px]"
//           key={char.id}
//           onClick={() => {
//             router.push(`/details/${char.id}`);
//           }}
//         >
//           <img
//             className="w-20 h-20 mask mask-squircle cursos-pointer "
//             src={char.image}
//             alt={char.type}
//           />
//           <div className="text-center">
//             <h2 className="text-2xl fonte">
//               {char.id} {char.name} {char.gender}{" "}
//             </h2>
//           </div>
//         </li>
//       ))}
//     </div>
//   );
// }

// export default Card;
