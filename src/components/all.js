import React from "react";
import { Navbar } from "./Navbar";
const baseUrl =
  "https://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1&apikey=9650afadab6ed64666c7d5db70ca9042&hash=8a9e9765d0c36bd3576a84e66c6c72c2";
export const All = () => {
  async function getComics() {}
  getComics();
  return (
    <div>
      <Navbar />
    </div>
  );
};
