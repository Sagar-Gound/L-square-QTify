import "./App.css";
import Card from "./components/Card/Card";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
    </>
  );
}

export default App;
