import { Image } from "react-bootstrap";
import portfolio from "../assets/nabil.jpg";
import styles from "../styles/AvatarImage.module.css";

export default function AvatarImage() {
  return (
    <>
      <div className={`${styles.box} mx-auto`}>
        <Image
          width={"100%"}
          height={"100%"}
          className={`${styles.image}`}
          src={portfolio}
          alt="portfolio-picture"
        />
      </div>
    </>
  );
}
