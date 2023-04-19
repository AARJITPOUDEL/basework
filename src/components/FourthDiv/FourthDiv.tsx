import React from "react";
import styles from "./FourthDiv.module.scss";
const FourthDiv = () => {
  return (
    <div>
      <div className={styles.fourthdiv}>
        <h2 className={styles.heading}>Ready to take the leap ahead?</h2>
        <p>
          I want to{" "}
          <ul>
            <li>build a new product</li>
            <li>hire a dedicated engineering team</li>{" "}
            <li>augment an existing</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default FourthDiv;
