import styles from "./NavButton.module.css";
import LeftNav from "../../assets/left-nav.svg";

const LeftNavButton = () => {
  return (
    <div className={styles.button}>
      <img src={LeftNav} alt="swiper left" />
    </div>
  );
};

export default LeftNavButton;