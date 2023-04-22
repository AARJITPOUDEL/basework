import React from "react";
import styles from "./Products.module.scss";
import lmu from "./lmu.png";

const Products = () => {
  return (
    <div className={styles.container}>
      <div className={styles.ourproducts}>
        <h1>Our Products</h1>
        <div className={styles.products}>
          <div className={styles.first}>
            <img src={lmu.src} alt="product image" />
            <img src={lmu.src} alt="product image" />
            <img src={lmu.src} alt="product image" />
          </div>
          <div className={styles.second}>
            <img src={lmu.src} alt="product image" />
            <img src={lmu.src} alt="product image" />
            <img src={lmu.src} alt="product image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
