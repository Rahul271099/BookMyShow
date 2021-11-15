import React, { useContext } from "react";
import { BiChevronDown, BiSearch, BiMenu, BiShareAlt } from "react-icons/bi";

// Context
import { MovieContext } from "../../context/Movie.context";

function Navsm() {
  const { movie } = useContext(MovieContext);
  return (
    <>
      <div className="text-gray-700 flex items-center justify-between ">
        <div>
          <h3 className="text-xl font-bold ">{movie.title}</h3>
        </div>
        <div className="w-8 h-8">
          <BiShareAlt className="w-full h-full" />
        </div>
      </div>
    </>
  );
}
// function NavMd() {
//   return (
//     <>
//       <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
//         <BiSearch />
//         <input
//           type="search"
//           className="w-full bg-transperent border-none focus:outline-none "
//           placeholder="Search for movies, events, plays, sports and activities"
//         />
//       </div>
//     </>
//   );
// }
function NavLg() {
  return (
    <>
      <div className="container mx-auto px-4 items-center flex justify-between">
        <div className="flex items-center w-1/2 gap-3">
          <div className="w-10 h-10">
            <img
              src="https://i.ibb.co/zPBYW3H/imgbin-bookmyshow-office-android-ticket-png.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md">
            <BiSearch />
            <input
              type="search"
              className="w-full bg-transperent border-none focus:outline-none "
              placeholder="Search for movies, events, plays, sports and activities"
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-200 text-base flex items-center cursor-pointer hover:text-white">
            Dehli NCR <BiChevronDown />
          </span>
          <button className="bg-red-600 text-white px-2 py-1 text-sm rounded">
            Sign In
          </button>
          <div className="w-8 h-8 text-white ">
            <BiMenu className="w-full h-full"></BiMenu>
          </div>
        </div>
      </div>
    </>
  );
}

const MovieNavbar = () => {
  return (
    <>
      <nav className="bg-white lg:bg-darkbackground-700 px-4 py-3 border-b-2 lg:border-b-0">
        <div className="md:hidden">
          {/* Mobile Screen */}
          <Navsm />
        </div>
        <div className="hidden md:flex lg:hidden">
          {/* Medium/Tab Screen */}
          <Navsm />
        </div>
        <div className="hidden w-full lg:flex">
          {/* Large Screen */}
          <NavLg />
        </div>
      </nav>
    </>
  );
};

export default MovieNavbar;
