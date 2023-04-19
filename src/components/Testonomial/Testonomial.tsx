import React from "react";
import styles from "./Testonomial.module.scss";
import lmu from "../FirstDiv/lancemeup.png";
import nerajan from "./nerajan.jpg";

const Testonomial = () => {
  return (
    <div>
      <div className={styles.testonomial}>
        <h3>
          “It would have taken months to build the product team that we
          inherited overnight with Basework. They’re built for startup speed,
          and they have consistently delivered a well-engineered product for us.
          Laudio is my second partnership with Basework, and they have earned my
          trust.”
        </h3>
        <div className={styles.details}>
          <img src={nerajan.src} className={styles.profile} />
          <p className={styles.name}>Nerajan K.C.</p>
          <p className={styles.company}>CEO, LancemeUp, Nepal</p>
          <img src={lmu.src} alt="logo" width={100} />
        </div>
      </div>
    </div>
  );
};

export default Testonomial;
