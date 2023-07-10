import Link from "next/link";

function Navigation() {
  return (
    <div>
      <ul className="flex flex-row h-20 items-center text-2xl text-center bg-neutral-800  justify-around">
        <li className=" text-white text-xl rounded-2xl bg-green-500 p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
          <Link href="/">Home</Link>
        </li>
        <li className=" text-gray-100 text-xl rounded-2xl bg-green-500 p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
          <Link href="/favorites">Favorites</Link>
        </li>
        <li className=" text-gray-100 text-xl rounded-2xl bg-green-500 p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
          <Link href="/about">About</Link>
        </li>
        <li className=" text-gray-100 text-xl rounded-2xl bg-green-500 p-2 mr-5 ml-5 tracking-wider flex-none transition duration-200 hover:scale-110">
          <Link href="/about">Logout</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
