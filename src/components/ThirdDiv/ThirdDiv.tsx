import React from "react";
import styles from "./ThirdDiv.module.scss";
import Button from "../Button/Button";
import Icons from "@/variables/Icons";
import { Icon } from "@iconify/react";

const ThirdDiv = () => {
  return (
    <div>
      <div className={styles.thirddiv}>
        {" "}
        <div className={styles.right}>
          <Button className={styles.ShowBtn}>
            Show Me How <Icon icon={Icons.ArrowRight}></Icon>
          </Button>
        </div>
        <div className={styles.left}>
          <h1 className={styles.heading}>
            Design, build, and scale your vision
          </h1>
          <p className={styles.description}>
            We're ready to be your secret digital weapon. And we're flexible.
            Work with just our developers or designers, or partner with us along
            your entire digital journey.
          </p>
        </div>
      </div>{" "}
      <div className={styles.section}>
        <div className={styles.part}>
          {/* <div className={styles.headIcon}>
            <Icon icon={Icons.One} color="#F0A139" height={70}></Icon>
          </div> */}
          <Icon icon={Icons.Idea} height={40} className={styles.icon}></Icon>

          <h2>Investigate</h2>
          <ul>
            <li>Discovery Workshops</li>
            <li>Process Mapping</li>
            <li>Learn Canvas</li>
            <li>Market Research</li>
            <li>Goal Setting</li>
          </ul>
        </div>
        <div className={styles.part}>
          {" "}
          {/* <div className={styles.headIcon}>
            <Icon icon={Icons.One} height={50}></Icon>
          </div> */}
          <Icon icon={Icons.Cloud} className={styles.icon} height={40}></Icon>
          <h2>Design</h2>
          <ul>
            <li>UI</li>
            <li>UX 2</li>
            <li>Prototypes 3</li>
            <li>Bran Identity</li>
          </ul>
        </div>
        <div className={styles.part}>
          {" "}
          {/* <div className={styles.headIcon}>
            <Icon icon={Icons.One} height={50}></Icon>
          </div> */}
          <Icon
            icon={Icons.Terminal}
            className={styles.icon}
            height={40}
          ></Icon>
          <h2>Develop</h2>
          <ul>
            <li>Web Development</li>
            <li>App Development</li>
            <li>AI & ML</li>
            <li>QA</li>
            <li>DevOps</li>
          </ul>
        </div>
        <div className={styles.part}>
          {" "}
          {/* <div className={styles.headIcon}>
            <Icon icon={Icons.One} height={50}></Icon>
          </div> */}
          <Icon icon={Icons.Rocket} className={styles.icon} height={40}></Icon>
          <h2>Launch</h2>
          <ul>
            <li>Cloud Operations</li>
            <li>Monitoring</li>
            <li>Data Operations</li>
            <li>Security</li>
          </ul>
        </div>
        <div className={styles.part}>
          {" "}
          {/* <div className={styles.headIcon}>
            <Icon icon={Icons.One} height={50}></Icon>
          </div> */}
          <Icon
            icon={Icons.Terminal}
            className={styles.icon}
            height={40}
          ></Icon>
          <h2>Scale</h2>
          <ul>
            <li>Product Analysis</li>
            <li>Business Intelligence</li>
            <li>Automation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ThirdDiv;
