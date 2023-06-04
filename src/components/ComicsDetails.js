import React from "react";
import { useLocation } from "react-router-dom";

export const ComicsDetails = () => {
  const location = useLocation();
  const selectedComic = location.state;
  console.log(selectedComic);
  return (
    <div className="description">
      {selectedComic && (
        <div className="description-card">
          <img
            src={
              selectedComic.thumbnail.path +
              "." +
              selectedComic.thumbnail.extension
            }
            alt=""
          />
          <div className="details">
            <h1>{selectedComic.title}</h1>
            <p>{selectedComic.modified.slice(0, 10)}</p>
            <p>{selectedComic.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
