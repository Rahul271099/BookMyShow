import React from "react";
import { Link } from "react-router-dom";

const Poster = (props) => {
  return (
    <Link to={`/movie/${props.id}`}>
      <div className="flex flex-col items-start px-1 md:px-3 ">
        <div className="h-40 md:h-96">
          <img
            src={`https://image.tmdb.org/t/p/original${props.poster_path}`}
            alt="poster"
            className="w-full h-full rounded-md object-center object-cover"
          />
        </div>
        <h3
          className={`text-lg font-bold ${
            props.isDark ? "text-white" : "text-black"
          }`}
        >
          {props.title}
        </h3>
        <p
          className={`text-sm ${
            props.isDark ? "text-white" : "text-gray-500"
          } `}
        >
          {props.subtitle}
        </p>
      </div>
    </Link>
  );
};
export default Poster;
