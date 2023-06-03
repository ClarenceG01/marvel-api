import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";

const baseUrl =
  "https://gateway.marvel.com/v1/public/creators?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";
export const Creators = () => {
  // store data in state
  const [creator, setCreator] = useState([]);
  // fetch data from api
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(baseUrl);
        setCreator(response.data.data.results);
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
        {creator.map((item) => {
          return (
            <div className="card">
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <h1>{item.firstName + " " + item.lastName}</h1>
              <p>Date:{item.modified.slice(0, 10)}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
