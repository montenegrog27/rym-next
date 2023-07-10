async function getDetail(id) {
  const url = "https://rickandmortyapi.com/api/character";

  const res = await fetch(`${url}/${id}`);
  const data = await res.json();
  console.log(data);
  return data;
}

async function DetailId({ params }) {
  const data = await getDetail(params.id);

  return (
    <div className="flex  justify-center items-center mt-16">
      <div className="w-[700px]  card lg:card-side bg-base-100 shadow-xl h-full flex justify-center items-center ">
        <figure>
          <img src={data.image} alt={data.type} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.name}</h2>
          <h2 className="card-title">{data.species}</h2>
          <h2 className="card-title">{data.gender}</h2>
          <div className="card-actions justify-end">
            <button className="btn text-gray-100 text-xl bg-green-500">
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailId;

//! usando hooks de react
// "use client";
// import { useParams } from "next/navigation";

// function DetailId() {
//   const params = useParams();
//   console.log(params);
//   return <div>DetailId</div>;
// }

// export default DetailId;
