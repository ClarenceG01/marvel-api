import React from "react";
import { useLocation } from "react-router-dom";
import notfound from "./images/notfound.png";

const goBack = () => {
  window.history.back();
};
export const StoriesDetails = () => {
  const location = useLocation();
  const selectedStory = location.state;
  console.log(selectedStory);
  return (
    <div className="description">
      <i class="fa-solid fa-x" onClick={goBack}></i>
      {selectedStory && (
        <div className="description-card">
          <img src={notfound} alt="" />
          <div className="details">
            <h5>{selectedStory.title}</h5>
            <p>Modified:{selectedStory.modified.slice(0, 10)}</p>
            <p>Series:</p>
            {selectedStory.comics.items.map((item) => (
              <p key={item.resourceURI}>~{item.name}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
