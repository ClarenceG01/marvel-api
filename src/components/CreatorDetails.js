import React from "react";
import { useLocation } from "react-router-dom";

const goBack = () => {
  window.history.back();
};

export const CreatorDetails = () => {
  const location = useLocation();
  const selectedCreator = location.state;
  console.log(selectedCreator.comics.items);
  return (
    <div className="description">
      <i class="fa-solid fa-x" onClick={goBack}></i>
      {selectedCreator && (
        <div className="description-card">
          <img
            src={
              selectedCreator.thumbnail.path +
              "." +
              selectedCreator.thumbnail.extension
            }
            alt=""
          />
          <div className="details">
            <h1>{selectedCreator.firstName}</h1>
            <p>Modified:{selectedCreator.modified.slice(0, 10)}</p>
            <p>Series:</p>
            {selectedCreator.comics.items.map((item) => (
              <p key={item.resourceURI}>~{item.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
