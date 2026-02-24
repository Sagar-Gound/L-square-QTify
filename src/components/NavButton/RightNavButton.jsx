import styles from "./NavButton.module.css";
import RightNav from "../../assets/right-nav.svg";

const RightNavButton = () => {
  return (
    <div className={styles.button}>
     <img src={RightNav} alt="swiper left" />
    </div>
  );
};

export default RightNavButton;