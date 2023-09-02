import React, { useState } from "react";
import EmptyStar from "../assets/empty-star.png";
import FilledStar from "../assets/full-star.png";
import "./rate.css";

function StarRating({ starCount, value, onChange }) {
  const [currRating, setCurrRating] = useState(value);

  const handleHover = (newValue) => {
    setCurrRating(newValue);
  };

  const handleClick = (newValue) => {
    setCurrRating(newValue);
    onChange(newValue);
  };

  return (
    <div className="star-rating">
      {[...Array(starCount).keys()].map((index) => (
        <img
          key={index}
          className="star"
          onMouseOver={() => handleHover(index + 1)}
          onClick={() => handleClick(index + 1)}
          src={index + 1 <= currRating ? FilledStar : EmptyStar}
          alt={index + 1 <= currRating ? "filled star" : "empty star"}
        />
      ))}
    </div>
  );
}

export default StarRating;
