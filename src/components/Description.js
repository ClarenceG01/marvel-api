import React from "react";
import { useLocation } from "react-router-dom";

const goBack = () => {
  window.history.back();
};
export const Description = () => {
  const location = useLocation();
  const selectedCharacter = location.state;
  console.log(selectedCharacter);
  return (
    <div className="description">
      <i class="fa-solid fa-x" onClick={goBack}></i>
      {selectedCharacter && (
        <div className="description-card">
          <img
            src={
              selectedCharacter.thumbnail.path +
              "." +
              selectedCharacter.thumbnail.extension
            }
            alt=""
          />
          <div className="details">
            <h1>{selectedCharacter.name}</h1>
            <p>{selectedCharacter.modified.slice(0, 10)}</p>
            <p>{selectedCharacter.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};
