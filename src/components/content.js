import React, { useEffect } from "react";
import { useState } from "react";
import { Navbar } from "./Navbar";
export const Content = () => {
  const [card, setCard] = useState([]);
  const baseUrl =
    "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=cf5d21c3bd3c1209bf4b8d855300d07c&hash=70b04f1a596fe92d363e68db29d05085";
  // read comics from the API
  async function getComics() {
    const response = await fetch(baseUrl);
    const comics = await response.json();
    // console.log(comics.data.results[0].name);
    setCard(comics);
  }
  console.log(card);
  useEffect(() => {
    getComics();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="characters">
        {/*{card.data.results.map((item) => {
          return (
            <div className="card">
              <img
                src={item.thumbnail.path + "." + item.thumbnail.extension}
                alt=""
              />
              <h1>{item.name}</h1>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
