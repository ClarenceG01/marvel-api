import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";

const baseUrl =
  "https://gateway.marvel.com/v1/public/creators?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";

export const Creators = () => {
  const [creators, setCreators] = useState([]);
  const [selectedCreator, setSelectedCreator] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the description route

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setCreators(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = (creator) => {
    setSelectedCreator(creator);
    navigate("/creatorDescription", { state: creator }); // Navigate to the "/description" route when a card is clicked
    console.log(creator);
  };

  return (
    <div>
      <Navbar />
      <h1 className="page-title">Creators</h1>
      <div className="characters">
        {creators.map((creator) => (
          <div
            key={creator.id}
            className="card"
            onClick={() => handleCardClick(creator)}
          >
            <img
              src={creator.thumbnail.path + "." + creator.thumbnail.extension}
              alt=""
            />
            <h1>{creator.firstName}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
