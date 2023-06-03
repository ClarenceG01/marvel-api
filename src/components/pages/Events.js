import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";

const baseUrl =
  "https://gateway.marvel.com/v1/public/events?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";
export const Events = () => {
  // store data in state
  const [event, setEvent] = useState([]);
  // fetch data from api
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(baseUrl);
        setEvent(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItem();
  });
  return (
    <div>
      <Navbar />
      <div className="characters">
        {event.map((item) => {
          return (
            <div className="card">
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
