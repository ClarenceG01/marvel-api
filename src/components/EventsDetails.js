import React from "react";
import { useLocation } from "react-router-dom";

export const EventsDetails = () => {
  const location = useLocation();
  const selectedEvent = location.state;
  console.log(selectedEvent);
  return (
    <div className="description">
      {selectedEvent && (
        <div className="description-card">
          <img
            src={
              selectedEvent.thumbnail.path +
              "." +
              selectedEvent.thumbnail.extension
            }
            alt=""
          />
          <div className="details">
            <h1>{selectedEvent.title}</h1>
            <p>{selectedEvent.description}</p>
            <p>Modified:{selectedEvent.modified.slice(0, 10)}</p>
            <p>Series:</p>
          </div>
        </div>
      )}
    </div>
  );
};
