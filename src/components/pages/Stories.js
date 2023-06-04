import React, { useState, useEffect } from "react";
import { Navbar } from "../Navbar";
import axios from "axios";
import { ImageSlider } from "./ImageSlider";

const baseUrl =
  "https://gateway.marvel.com/v1/public/stories?ts=1&apikey=34fc91a3d879f19895b515d8273965f9&hash=6eef28334e4fdbf36b599dc91ce21ccf";

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
      <ImageSlider />
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
