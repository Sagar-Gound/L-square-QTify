import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ image, title, follows }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img src={image} alt={title} />
        </div>

        <div className={styles.bottomSection}>
          <Chip
            label={`${follows} Follows`}
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;