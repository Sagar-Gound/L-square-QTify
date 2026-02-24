import RightArrow from "../../assets/right-arrow.svg";
import styles from "./Nav.module.css";

function RightNav({ className }) {
  return (
    <button className={`${styles.nav} ${className}`}>
      <RightArrow />
    </button>
  );
}

export default RightNav;