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
import { Description } from "./components/Description";
import { ComicsDetails } from "./components/ComicsDetails";
import { CreatorDetails } from "./components/CreatorDetails";
import { EventsDetails } from "./components/EventsDetails";
import { StoriesDetails } from "./components/StoriesDetails";
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
      <Route path="/description" element={<Description />} />
      <Route path="/comicsdetails" element={<ComicsDetails />} />
      <Route path="/creatorDescription" element={<CreatorDetails />} />
      <Route path="/eventDetails" element={<EventsDetails />} />
      <Route path="/storyDetails" element={<StoriesDetails />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={myRouter} />;
}

export default App;
