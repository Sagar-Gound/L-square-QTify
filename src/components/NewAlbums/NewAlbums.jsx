import { useEffect, useState } from "react";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./NewAlbums.module.css";
import { Container } from "@mui/material";

function NewAlbums() {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, []);

  return (
    <div className={styles.section}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h2>New Albums</h2>
          <button
            className={styles.toggle}
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {collapsed ? "Show All" : "Collapse"}
          </button>
        </div>

        {collapsed ? (
          <Carousel
            data={albums}
            renderItem={(album) => (
              <Card
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            )}
          />
        ) : (
          <div className={styles.grid}>
            {albums.map((album) => (
              <Card
                key={album.id}
                image={album.image}
                title={album.title}
                follows={album.follows}
              />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}

export default NewAlbums;
