import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/Context";

const Navbar = () => {
  const { searchParams, setSearchParmas,handelSubmit } = useContext(GlobalContext);
  return (
    <nav className="flex justify-between items-center py-8 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="text-2xl font-bold">
        <Link to={"/"} className="text-black hover:text-gray-700 duration-300 ">
          Food-Recipe
        </Link>
      </h2>

      <form onSubmit={handelSubmit}>
        <input
          type="text"
          value={searchParams}
          onChange={(e) => setSearchParmas(e.target.value)}
          name="search"
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          <Link
            to={"/"}
            className="text-black hover:text-gray-700 duration-300 "
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to={"/favorite"}
            className="text-black hover:text-gray-700 duration-300 "
          >
            Favorities
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
