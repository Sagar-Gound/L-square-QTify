import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import axios from "axios";
import Card from "../Card/Card";

function Section({ title, apiEndpoint }) {
  const [data, setData] = useState([]);
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiEndpoint]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <button
          className={styles.toggleBtn}
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "Show all" : "Collapse"}
        </button>
      </div>

      <div
        className={`${styles.cardsContainer} ${
          collapsed ? styles.collapsed : ""
        }`}
      >
        {data.map((album) => (
          <Card
            key={album.id}
            image={album.image}
            title={album.title}
            follows={album.follows}
          />
        ))}
      </div>
    </div>
  );
}

export default Section;