import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const baseUrl =
  "https://gateway.marvel.com/v1/public/events?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";

export const Events = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the description route

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setEvents(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    navigate("/eventDetails", { state: event }); // Navigate to the "/description" route when a card is clicked
    console.log(event);
  };

  return (
    <div>
      <div className="characters">
        {events.map((event) => (
          <div
            key={event.id}
            className="card"
            onClick={() => handleCardClick(event)}
          >
            <img
              src={event.thumbnail.path + "." + event.thumbnail.extension}
              alt=""
            />
            <h1>{event.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
