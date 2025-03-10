import styles from "./navbar.module.css";
import BeTalentLogo from "../../assets/BeTalent.svg";

export const Navbar = () => (
  <nav className={styles.container}>
    <img className={styles.img} src={BeTalentLogo} />
  </nav>
);
