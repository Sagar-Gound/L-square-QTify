import "./App.css";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import Songs from "./components/Songs/Songs";
import TopAlbums from "./components/TopAlbums/TopAlbums";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
      <Songs />
    </>
  );
}

export default App;
