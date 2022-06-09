import React from "react";
import styles from "../styles/Hr.module.css";

export default function Hr() {
  return (
    <div className="container">
      <hr className={`${styles.hr_height}`} />
    </div>
  );
}
