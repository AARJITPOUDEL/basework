import React from "react";
import styles from "./SecondDiv.module.scss";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";

const SecondDiv = () => {
  return (
    <div>
      <div className={styles.seconddiv}></div>
      <div className={styles.section}>
        <h2 className={styles.title}>We work how you work</h2>
        <p className={styles.description}>
          Level up your team with Leapfrog. Choose the engagement model that
          makes sense for you.
        </p>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Icon icon={Icons.Star} className={styles.icon}></Icon>
            <h3 className={styles.cardTitle}>Build a New Product with Us</h3>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.card}>
            <Icon icon={Icons.Star} className={styles.icon}></Icon>
            <h3 className={styles.cardTitle}>Hire Your Dedicated Team</h3>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className={styles.card}>
            <Icon icon={Icons.Star} className={styles.icon}></Icon>
            <h3 className={styles.cardTitle}>Augment Your Existing Team</h3>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondDiv;
