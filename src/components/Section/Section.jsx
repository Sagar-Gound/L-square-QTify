import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function Section({
  title,
  data = [],
  type = "album",
  showAll = true,
  children,
}) {
  const renderCard = (item) => {
    const countKey = type === "song" ? "likes" : "follows";

    return (
      <Card
        image={item.image}
        title={item.title}
        follows={item.follows}
        likes={item.likes}
        type={type}
        count={item[countKey]}
      />
    );
  };

  return (
    <div className={styles.section}>
      <div className={`${styles.header} ${!showAll ? styles.headerNoAction : ""}`}>
        <h2 className={styles.title}>{title}</h2>

        {showAll && (
          <button className={styles.showAll}>
            Show all
          </button>
        )}
      </div>

      {children}

      <Carousel
        data={data}
        renderItem={renderCard}
      />
    </div>
  );
}

export default Section;