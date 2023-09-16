import React from "react";
import { Link } from "react-router-dom";
import imdb from "../icons/imdb.svg";
import tomato from "../icons/tomato.svg";

const MovieCard = ({ movie }) => {
  const number = movie.vote_average * 10;
  const getRandomNumber = () => {
    const randomNumber = Math.random();

    const min = 70;
    const max = 90;
    const scaledNumber = min + randomNumber * (max - min + 1);

    return Math.floor(scaledNumber);
  };
  const randomNum = getRandomNumber();

  return (
    <Link to={`/${movie.id}`}>
      <div
        className="rounded-b-xl hover:scale-105 duration-500"
        data-testid="movie-card"
      >
        <img
          className="w-full object-contain"
          loading="lazy"
          data-testid="movie-poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          alt={movie.title}
        />
        <div className="flex flex-col gap-1 mt-2">
          <span
            className="text-gray-800 text-[12px]"
            data-testid="movie-release-date"
          >
            {movie.release_date}
          </span>
          <span
            className="text-gray-900 text-sm md:text-md font-semibold"
            data-testid="movie-title"
          >
            {movie.title}
          </span>
          <div className="flex justify-between">
            <div className="flex items-center gap-1">
              <img src={imdb} className="w-[40px]" alt={movie.title} />

              <span className="text-[10px]">{number.toFixed(1)} / 100</span>
            </div>
            <div className="flex items-center gap-1">
              <img
                src={tomato}
                alt={movie.title}
                className="w-[16px] h-[16px]"
                loading="lazy"
              />
              <span className="text-[10px]">{randomNum}%</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
