import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import notfound from "../images/notfound.png";
import { Navbar } from "../Navbar";
import { ImageSlider } from "./ImageSlider";

const baseUrl =
  "https://gateway.marvel.com/v1/public/stories?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";

export const Stories = () => {
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the description route

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setStories(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = (story) => {
    setSelectedStory(story);
    navigate("/storyDetails", { state: story }); // Navigate to the "/description" route when a card is clicked
    console.log(story);
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Stories</h1>
      <div className="characters">
        {stories.map((story) => (
          <div
            key={story.id}
            className="card"
            onClick={() => handleCardClick(story)}
          >
            <img src={notfound} alt="" />
            <h5>{story.title}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};
