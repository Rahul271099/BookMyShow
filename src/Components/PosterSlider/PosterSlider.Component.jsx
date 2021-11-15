import React from "react";
import Slider from "react-slick";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const settings = {
    arrows: true,
    infinite: false,
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoints: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoints: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoints: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { posters, title, subtitle, isDark, config } = props;

  const currentSettings = config ? config : settings;

  return (
    <>
      <div className="flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className={`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className={`text-sm  ${isDark ? "text-white" : "text-black"} `}>
          {subtitle}
        </p>
      </div>
      <Slider {...currentSettings}>
        {posters.map((each) => (
          <Poster {...each} isDark={isDark} />
        ))}
      </Slider>
    </>
  );
};

export default PosterSlider;
