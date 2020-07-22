/* import React from "react"; */
import React, { useState } from "react";
import cx from "classnames";
import SliderContext from "./context";
import ShowDetailsButton from "./ShowDetailsButton";
import Mark from "./Mark";
import "./Item.scss";
// import { render } from "node-sass";

var transformation;
var zIndexValue;

/*ISSUEESSS */

// export function wrapperfunction(movie) {
//   const [hover, setHover] = useState(currhoverstate);

export function Item({ movie }) {
  const [hover, setHover] = useState(false);
  // setHover = (bool) => {
  //   hover = bool;
  //   console.log(hover);
  // }

  return (
    <SliderContext.Consumer props={{ movie }}>
      {({ onSelectSlide, currentSlide, elementRef }) => {
        const isActive = currentSlide && currentSlide.id === movie.id,
          transitionSize = movie.transitionSize,
          transitionEase = movie.transitionEase,
          transitionGrowth = movie.transitionWidth;
        // console.log("transitionSize " + movie.transitionWidth);
        // console.log("transform " + transitionSize + " ease " + transitionEase);

        // function setHoverProp(currhoverstate) {
        //   // const [hover, setHover] = useState(currhoverstate);

        //   /* CANT RENDER THE STATE UNLESS OUTSIDE DIV */
        //   setHover(currhoverstate);
        // }

        /* Would I do it like a getter setter ? */
        // function getHoverProp() {
        //   return hover;
        // }

        function setStyle(hovered) {
          console.log("this is the assignmet of hover" + hovered);

          if(hovered){
            transformation = "scale(" + transitionGrowth + ")";
            zIndexValue=40;
          }else{
            transformation = "scale(1.0)";
            zIndexValue=0;
          }

          /*
          hovered
            ? (transformation = "scale(" + transitionGrowth + ")"),
            (zIndexValue = 40)
            : (transformation = "scale(1.0)");

            */


          // console.log(
          //   "this is the assignment of transformation" + transformation
          // );

          console.log({
            transform: transformation,
            transition:
              "transform " +
              transitionSize +
              "ms ease " +
              transitionEase +
              "ms",
          });

          return {
            transform: transformation,
            zIndex: zIndexValue,
            transition:
              "transform " +
              transitionSize +
              "ms ease " +
              transitionEase +
              "ms",
          };
        }

        return (
          <div
            onMouseOut={() => setHover(false)}
            onMouseOver={() => setHover(true)}
            style={setStyle(hover)}
            ref={elementRef}
            className={cx("item", {
              "item--open": isActive,
            })}
          >
            <img src={movie.image} alt="" />
            <ShowDetailsButton onClick={() => onSelectSlide(movie)} />
            {isActive && <Mark />}
          </div>
        );
      }}
    </SliderContext.Consumer>
  );
}

/* Return Item at end from wrapper */

//   return <div>{Item}</div>;
// }

export default Item;
