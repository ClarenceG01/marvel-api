import React from "react";
import "./index.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Content } from "./components/content";
import { Events } from "./components/pages/Events";
import { Stories } from "./components/pages/Stories";
import { Comics } from "./components/pages/comics";
import { Creators } from "./components/pages/creators";

// create Router, route
const myRouter = createBrowserRouter(
  // create routes from elements
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Content />} />
      <Route path="/comics" element={<Comics />} />
      <Route path="/creators" element={<Creators />} />
      <Route path="/events" element={<Events />} />
      <Route path="/stories" element={<Stories />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
