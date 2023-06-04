import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";
import { ImageSlider } from "./ImageSlider";

const baseUrl =
  "https://gateway.marvel.com/v1/public/creators?ts=1&apikey=34fc91a3d879f19895b515d8273965f9&hash=6eef28334e4fdbf36b599dc91ce21ccf";
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
      <ImageSlider />
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
