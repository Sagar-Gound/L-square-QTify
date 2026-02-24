import { useEffect, useMemo, useState } from "react";
import { Container, Tab, Tabs } from "@mui/material";
import Section from "../Section/Section";
import styles from "./Songs.module.css";

const ALL_TAB = "all";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(ALL_TAB);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data));
  }, []);

  useEffect(() => {
    fetch("https://qtify-backend.labs.crio.do/genres")
      .then((res) => res.json())
      .then((data) => setGenres(data.data));
  }, []);

  const filteredSongs = useMemo(() => {
    if (selectedGenre === ALL_TAB) {
      return songs;
    }

    return songs.filter((song) => song.genre.key === selectedGenre);
  }, [selectedGenre, songs]);

  return (
    <div className={styles.sectionWrapper}>
      <Container maxWidth="xl">
        <Section title="Songs" data={filteredSongs} type="song" showAll={false}>
          <Tabs
            value={selectedGenre}
            onChange={(_, value) => setSelectedGenre(value)}
            className={styles.tabs}
            TabIndicatorProps={{ className: styles.indicator }}
          >
            <Tab className={styles.tab} label="All" value={ALL_TAB} />
            {genres.map((genre) => (
              <Tab
                key={genre.key}
                className={styles.tab}
                label={genre.label}
                value={genre.key}
              />
            ))}
          </Tabs>
        </Section>
      </Container>
    </div>
  );
}

export default Songs;