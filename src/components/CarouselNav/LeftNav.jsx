import LeftArrow from "../../assets/left-arrow.svg";
import styles from "./Nav.module.css";

function LeftNav({ className }) {
  return (
    <button className={`${styles.nav} ${className}`}>
      <LeftArrow />
    </button>
  );
}

export default LeftNav;