import styles from "./NavButton.module.css";
import RightNav from "../../assets/right-nav.svg";

const RightNavButton = () => {
  return (
    <div className={styles.button}>
      <img src={RightNav} alt="swiper right" />
    </div>
  );
};

export default RightNavButton;