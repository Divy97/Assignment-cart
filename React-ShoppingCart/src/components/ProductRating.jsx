import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

import "./ProductRating.css";
const ProductRating = () => {
  const [rate, setRate] = useState(0);
  return (
    <>
      <div className="container">
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <input
                className="radio"
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                }}
              />
              <div className="rating">
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "000"
                      : "rgb(192,192,192)"
                  }
                />
              </div>
            </label>
          );
        })}
      </div>
    </>
  );
};

export default ProductRating;
