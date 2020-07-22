import React, { Component } from "react";
import Slider from "./components/NetflixSlider";
import "./App.scss";

const movies = [
  {
    id: 1,
    image:
      "/images/imagesimported/resized_images_2/Screen Shot 2020-07-08 at 125813 PM.jpg",
    imageBg: "/images/imagesimported/resized/background77.webp",
    title: "Slide One",
    transitionWidth: 1.25,
    transitionEase: 100,
    transitionSize: 500,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 2,
    image: "/images/imagesimported/resized (3)/Image from iOS.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background2.webp",
    title: "Slide Two",
    transitionWidth: 2.0,
    transitionEase: 100,
    transitionSize: 2000,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 3,
    image:
      "/images/imagesimported/resized_images_2/Screen Shot 2020-07-08 at 125856 PM.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background3.webp",
    title: "Slide Three",
    transitionWidth: 1.11,
    transitionEase: 100,
    transitionSize: 100,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 4,
    image: "/images/imagesimported/resized/background1.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background4.webp",
    title: "Slide Four",
    transitionWidth: 1.25,
    transitionEase: 100,
    transitionSize: 1000,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 5,
    image: "/images/imagesimported/resized (3)/Image from iOS 1.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background3.webp",
    title: "Slide Five",
    transitionWidth: 1.01,
    transitionEase: 100,
    transitionSize: 250,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 6,
    image: "/images/imagesimported/resized/background5.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background4.webp",
    title: "Slide Six",
    transitionWidth: 1.22,
    transitionEase: 100,
    transitionSize: 450,
    numHovers: 0,
    numClicks: 0,
  },
  {
    id: 7,
    image:
      "/images/imagesimported/resized_images_2/Screen Shot 2020-07-08 at 125750 PM.jpg",
    imageBg: "/images/imagesimported/resized/webpimages/background2.webp",
    title: "Slide Seven",
    transitionWidth: 1.75,
    transitionEase: 100,
    transitionSize: 120,
    numHovers: 0,
    numClicks: 0,
  },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 style={{ color: "white", paddingLeft: "20px", paddingTop: "20px" }}>
          Slider One
        </h1>
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
        <h1 style={{ color: "white", paddingLeft: "20px", paddingTop: "20px" }}>
          Slider Two
        </h1>
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
        <h1 style={{ color: "white", paddingLeft: "20px", paddingTop: "20px" }}>
          Slider Three
        </h1>
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}>
              item1
            </Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
