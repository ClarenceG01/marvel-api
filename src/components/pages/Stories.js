import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";

const baseUrl =
  "https://gateway.marvel.com/v1/public/stories?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";

export const Stories = () => {
  // store data in state
  const [stories, setStories] = useState([]);
  // fetch data from api
  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(baseUrl);
        setStories(response.data.data.results);
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
        {stories.map((item) => {
          return (
            <div className="card">
              {/* <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
          /> */}
              <h1>{item.id}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};
