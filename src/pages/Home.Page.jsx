import React, { useState, useEffect } from "react";
import EntertainmentCardSlider from "../Components/Entertainment/EntertainmentCard.Component";
import HeroCarousel from "../Components/HeroCarousel/HeroCarousel.Component";
import PosterSlider from "../Components/PosterSlider/PosterSlider.Component";
import axios from "axios";

function HomePage() {
  const [premiereImages, setPremiereImage] = useState([]);
  const [recommandedMovies, setrecommandedMovies] = useState([]);
  const [OnlineStreamEvents, setOnlineStreamEvents] = useState([]);
  const [NewMovies, setNewMovies] = useState([]);

  useEffect(() => {
    const requestpremierMovies = async () => {
      const premierMovies = await axios.get("/movie/popular");
      setPremiereImage(premierMovies.data.results);
      console.log(premierMovies);
    };
    requestpremierMovies();
  }, []);

  useEffect(() => {
    const requestrecommendedMovies = async () => {
      const recommendedMovies = await axios.get("/movie/top_rated");
      setrecommandedMovies(recommendedMovies.data.results);
      console.log(recommendedMovies);
    };
    requestrecommendedMovies();
  }, []);
  useEffect(() => {
    const requestOnlineStreamEvents = async () => {
      const OnlineStreamEvents = await axios.get("/movie/upcoming");
      setOnlineStreamEvents(OnlineStreamEvents.data.results);
      console.log(OnlineStreamEvents);
    };
    requestOnlineStreamEvents();
  }, []);
  useEffect(() => {
    const requestNowPlayingMovies = async () => {
      const NowPlayingMovies = await axios.get("/movie/now_playing");
      setNewMovies(NowPlayingMovies.data.results);
      console.log(NowPlayingMovies);
    };
    requestNowPlayingMovies();
  }, []);

  return (
    <>
      <HeroCarousel />
      <div className="container mx-auto px-12 my-8">
        <h1 className="text-2xl font-bold text-gray-800 sm:ml-3 ml-0 my-3">
          The best of Entertainment
        </h1>
        <EntertainmentCardSlider />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Recommended Movies"
          subtitle="List of recommended movies"
          posters={recommandedMovies}
          isDark={false}
        />
      </div>

      <div className="bg-premierecolor-800 py-12">
        <div className="container mx-auto px-4 md:px-12 my-2 flex flex-col gap-3">
          <div className="hidden md:flex">
            <img
              src="https://in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-rupay-banner-web-collection-202104230555.png"
              alt="Rupay"
              className=" w-full h-full "
            />
          </div>
          <PosterSlider
            title="PREMIERE"
            subtitle="Brand new releases every Friday"
            posters={premiereImages}
            isDark={true}
          />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="Online Stream Events"
          subtitle="List of Online Stream Events"
          posters={OnlineStreamEvents}
          isDark={false}
        />
      </div>
      <div className="container mx-auto px-4 md:px-12 my-8">
        <PosterSlider
          title="New Movies"
          subtitle="List of new movies"
          posters={NewMovies}
          isDark={false}
        />
      </div>
    </>
  );
}
export default HomePage;
