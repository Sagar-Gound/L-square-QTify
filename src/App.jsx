import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewAlbums from "./components/NewAlbums/NewAlbums";
import TopAlbums from "./components/TopAlbums/TopAlbums";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopAlbums />
      <NewAlbums />
    </>
  );
}

export default App;
