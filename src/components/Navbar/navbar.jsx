import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.social}>
        <Image src="/facebook.png" alt="facebook" width={24} height={24} />
        <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        <Image src="/tiktok.png" alt="tiktok" width={24} height={24} />
        <Image src="/youtube.png" alt="youtube" width={24} height={24} />
      </div> */}
      <div className={styles.logo}>
        <Image src="/loogo.png" alt="youtube" width={150} height={150} />
        {/* Kenya Bikers Association */}
      </div>

      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Homepage
        </Link>
        <Link href="/diagnosis" className={styles.link}>
          Motorcycle Diagnosis
        </Link>
        <Link href="/" className={styles.link}>
          Motorcycle Service Guide
        </Link>
        <Link href="/safetyculture" className={styles.link}>
          Safety Culture
        </Link>

        <Link
          href="https://www.detechtapp.com/roadbook"
          className={styles.link}
        >
          Biking Routes
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
