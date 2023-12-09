import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Welcome to Kenya Bikers Association -</b> Where the Open Road Calls
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <p className={styles.postDesc}>
            Rev up your engines and join the ultimate riding experience with
            Kenya Bikers Association. We are more than just a biker club; we are
            a brotherhood/sisterhood of passionate riders who share a love for
            the freedom of the open road. Whether you're a seasoned rider or a
            newcomer to the biking world, our club welcomes all enthusiasts.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
