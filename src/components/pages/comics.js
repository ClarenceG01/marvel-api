import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Navbar";

const baseUrl =
  "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=26da265f577790e5afb28e8fdd1ed373&hash=4cafd195b5d4bc0124aac08707f5dd3d";

export const Comics = () => {
  const [comics, setComics] = useState([]);
  const [selectedComic, setSelectedComic] = useState(null);
  const navigate = useNavigate(); // Hook to navigate to the description route

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get(baseUrl);
        setComics(response.data.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchItems();
  }, []);

  const handleCardClick = (comic) => {
    setSelectedComic(comic);
    navigate("/comicsdetails", { state: comic }); // Navigate to the "/description" route when a card is clicked
    console.log(comic);
  };

  return (
    <div>
      <Navbar />
      <div className="characters">
        {comics.map((comic) => (
          <div
            key={comic.id}
            className="card"
            onClick={() => handleCardClick(comic)}
          >
            <img
              src={comic.thumbnail.path + "." + comic.thumbnail.extension}
              alt=""
            />
            <h1>{comic.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};
