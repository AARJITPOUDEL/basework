import React from "react";
import styles from "./OurPlan.module.scss";
import background from "../FirstDiv/background.png";
import Button from "../Button/Button";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";
const OurPlan = () => {
  return (
    <div>
      <div className={styles.ourplan}>
        <div className={styles.head}>
          <h1>See what we are thinking</h1>
          <p>
            We’re not just doers, we’re tinkerers and thinkers obsessed with
            building new things in better ways. Read some of our insights,
            download our playbooks or listen to our podcast.
          </p>
        </div>
        <div className={styles.left}>
          <img src={background.src} alt="" className={styles.image} />
        </div>
        <div className={styles.right}>
          <h4>Our Workspace</h4>

          <h2>Build products that your customers love.</h2>
          <p>
            We believe in simple designs that solve users' problems and achieve
            business outcomes. Our process is based on design sprint best
            practices because we believe that ideas evolve for the better
            through understanding, prototyping, and fast iterations.
          </p>
          <Button className={styles.button}>
            Try it now <Icon icon={Icons.ArrowRight}></Icon>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OurPlan;
