import React from "react";
import styles from "./FirstDiv.module.scss";
import background from "./background.png";
import Button from "../Button/Button";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";
import iso from "./iso.png";
import lmu from "./lancemeup.png";
import trust from "./trust.png";
const FirstDiv = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftContainer}>
          <h1 className={styles.heading}>
            Optimize your workday with our workspace solutions
          </h1>
          <div className={styles.description}>
            <p>
              Do you want to increase efficiency throughout your organization?
              Lancemeup is adaptable and simple to use for all teams, allowing
              you to collaborate and deliver quality work faster.
            </p>
            <div className={styles.buttons}>
              <Button className={styles.contact}>Contact Us</Button>
              <Button className={styles.getStarted}>
                View our work <Icon icon={Icons.ArrowRight}></Icon>
              </Button>
            </div>
            <p className={styles.verified}>Verified and Certified by:</p>
            <div className={styles.logos}>
              <img src={lmu.src} height={50} style={{ marginRight: "15px" }} />
              <img
                src={trust.src}
                height={50}
                style={{ marginRight: "0px" }}
              />{" "}
              <img src={iso.src} height={50} style={{ marginRight: "15px" }} />
            </div>
          </div>
        </div>
        <div className={styles.rightContainer}>
          <img
            className={styles.image}
            src={background.src}
            alt="placeholder"
          />
        </div>
      </div>
    </div>
  );
};

export default FirstDiv;
