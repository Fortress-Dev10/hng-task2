import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import star from "../icons/star.svg";

import SideMenu from "./SideMenu.jsx";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [err, setErr] = useState(null);

  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNjNhZTNhZDMzZTc0ZDM5NTQ0OGE0NWJmMGVjYTUzYyIsInN1YiI6IjY1MDM4ODcwZWEzN2UwMDBjNjM4ZGJhYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7H8LB3Gi4-Jh20FeONVI292K37EoNMmMIBjas-qspM";
  const headers = {
    Authorization: `Bearer ${token}`,
    "content-type": "application/json",
  };

  useEffect(() => {
    setIsPending(true);
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, { headers })
      .then((response) => {
        if (response.status === 200) {
          setMovieDetail(response.data);
          setIsPending(false);
        }
      })
      .catch((error) => {
        setErr(error.message);
        setIsPending(false);
      });
  }, [id]);

  const formatDate = (dateString) => {
    const localDate = new Date(dateString);
    return localDate.toUTCString();
  };

  return (
    <div className="relative w-full flex sm:flex-row sm:gap-x-12 font-dmSans">
      <div className="hidden lg:block md:w-[226px]">
        <SideMenu />
      </div>
      <div className="w-full flex flex-col lg:mt-5 lg:mx-2">
        <video className="w-full md:h-[449px] h-60" controls width="100%">
          <source src="" type="video/webm" />
          Sorry, your browser doesn't support videos
        </video>
        {isPending && (
          <div className="mt-7 w-full flex flex-row justify-center">
            <Oval
              ariaLabel="loading-indicator"
              height={80}
              width={80}
              strokeWidth={5}
              strokeWidthSecondary={1.5}
              color="blue"
              secondaryColor="white"
            />
          </div>
        )}
        {movieDetail && (
          <div className="w-full flex flex-col sm:flex-row gap-x-4 mt-5 px-2 sm:px-8 font-poppins">
            {/* Movie Details */}
            <div className="flex flex-col w-full">
              {/* Movie Header */}
              <div className="flex flex-col sm:flex-row sm:items-center font-poppins">
                <div className="text-sm sm:text-base lg:text-[24px] font-[700] sm:leading-[34.5px]">
                  <span data-testid="movie-title">{movieDetail.title}</span>
                  <span> . </span>
                  <span className="" data-testid="movie-release-date">
                    {formatDate(movieDetail.release_date)}
                  </span>
                  <span> . PG-13 . </span>
                  <span className="" data-testid="movie-runtime">
                    {movieDetail.runtime} mins
                  </span>
                </div>
                <div className="flex flex-row gap-x-2 sm:items-center">
                  {movieDetail.genres.map((genre, index) => (
                    <div
                      key={index}
                      className="sm:ml-3 text-xs lg:text-[15px] font-[500] leading-[22.5px]"
                    >
                      {genre.name}
                    </div>
                  ))}
                </div>
              </div>
              {/* Movie Overview */}
              <p
                className="mt-1 sm:mt-4 text-sm lg:text-[20px] font-[400] leading-[20px] sm:leading-[30px] text-[#333333]"
                data-testid="movie-overview"
              >
                {movieDetail.overview}
              </p>
              {/* Movie Details */}
              <div className="mt-2 sm:mt-5 flex flex-col text-sm lg:text-[20px] leadin-[20px] sm:leading-[30px] font-[400] gap-y-2 sm:gap-y-4">
                {/* Director */}
                <div className="flex flex-row">
                  <p className="text-[#333333]">Director :</p>
                  <p className="pl-1 text-[#BE123C]">Joseph Kosinski</p>
                </div>
                {/* Writers */}
                <div className="flex flex-row">
                  <p className="text-[#333333]">Writers:</p>
                  <p className="pl-1 text-[#BE123C]">
                    Jim Cash, Jack Epps Jr, Peter Kosinski
                  </p>
                </div>
                {/* Stars */}
                <div className="flex flex-row">
                  <p className="text-[#333333]">Stars :</p>
                  <p className="pl-1 text-[#BE123C]">
                    Tom Cruise, Jennifer Connelly
                  </p>
                </div>
                {/* Buttons */}
                <div className="mt-2 sm:mt-0 flex flex-col sm:flex-row justify-between border rounded-[10px]">
                  <button className="bg-[#BE123C] text-xs sm:text-[20px] text-white rounded-[10px] px-3 py-1">
                    Top rated movie #65
                  </button>
                  <select className="px-3">
                    <option>Awards 9 Nomination</option>
                  </select>
                </div>
              </div>
            </div>
            {/* Sidebar */}
            <div className="sm:w-[360px] flex flex-col font-poppins gap-y-2 sm:gap-y-0">
              <div className="mt-2 sm:mt-0 flex flex-row justify-end items-center text-sm">
                <img className="h-[25px] mr-1 " src={star} alt="star svg" />
                <span> 8.5 </span> <span>| 350k</span>
              </div>
              <button className="w-full bg-[#BE123C] text-white text-sm lg:text-[20px] font-[500] leading-[30px] py-1 rounded-[10px]">
                See showtimes
              </button>
              <button
                className="mt-1 w-full bg-[#be123d46] text-sm lg:text-[20px] font-[500] text-[
#333333] py-1 rounded-[10px] border border-[#BE123C]"
              >
                More watch options
              </button>
            </div>
          </div>
        )}
        {!isPending && err && (
          <p className="text-lg font-semibold text-center mt-16 text-red-600">
            {err}! Cannot fetch Movie details, please{" "}
            <button
              className="pl-1 underline"
              onClick={() => window.location.reload()}
            >
              try again
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
