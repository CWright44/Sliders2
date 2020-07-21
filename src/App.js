/* import React, { Component } from "react"; */
import Slider from "./Slider2.js";
import React, { useState, useEffect, Component } from "react";
import SlideButton from "./components/NetflixSlider/SlideButton";
import "./App.scss";

const movies = [
  {
    id: 1,
    image: "/images/resized/background1.jpg",
    imageBg: "/images/resized/background1.jpg",
    title: "Russian doll",
  },
];

class App extends Component {
  render() {
    return (
      <div className="app">
        <Slider>
          {movies.map((movie) => (
            <Slider.Item movie={movie} key={movie.id}></Slider.Item>
          ))}
        </Slider>
      </div>
    );
  }
}

export default App;
