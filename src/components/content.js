import React, { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ImageSlider } from "./pages/ImageSlider";

const baseUrl =
  "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=34fc91a3d879f19895b515d8273965f9&hash=6eef28334e4fdbf36b599dc91ce21ccf";

export const Content = () => {
  const [characters, setCharacters] = useState([]);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the description route

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setCharacters(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = (character) => {
    setSelectedCharacter(character);
    navigate("/description", { state: character }); // Navigate to the "/description" route when a card is clicked
  };

  return (
    <div>
      <Navbar />
      <ImageSlider />
      <div className="characters">
        {characters.map((character) => (
          <div
            key={character.id}
            className="card"
            onClick={() => handleCardClick(character)}
          >
            <img
              src={
                character.thumbnail.path + "." + character.thumbnail.extension
              }
              alt=""
            />
            <h1>{character.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
