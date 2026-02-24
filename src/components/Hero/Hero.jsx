import styles from "./Hero.module.css";
import heroImage from "../../assets/hero_headphones.png";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div className={styles.imageContainer}>
        <img src={heroImage} width={212} alt="headphones" />
      </div>
    </section>
  );
}

export default Hero;
