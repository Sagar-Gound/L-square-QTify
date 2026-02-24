import { useEffect, useState } from "react";
import { Container } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";
import styles from "./AlbumSection.module.css";

function AlbumSection({ title, endpoint }) {
  const [albums, setAlbums] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setAlbums(data));
  }, [endpoint]);

  return (
    <div className={styles.section}>
      <Container maxWidth="xl">
        <div className={styles.header}>
          <h2>{title}</h2>
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

export default AlbumSection;