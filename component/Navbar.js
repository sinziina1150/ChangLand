/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Fragment>
      <div className={styles.Navbar}>
        <div className="container">
          <div className={styles.NavInfo}>
            <div className={styles.LogoImage}>
              <img
                layout="fill"
                src={
                  "/image/Chang-Land_Logo-and-Icon222-83x83x0x0x83x77x1659802894.png"
                }
                alt=""
              />
            </div>
            <ul className={styles.NavMenu}>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>ABOUT US</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>ABOUT US</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>NFT</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>ROAD MAP</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>CHABGVERSE</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>TEAM</a>
                </Link>
              </li>
              <li className={styles.ItemNavbar}>
                <Link href={"/"}>
                  <a className={styles.NavbarTextInfo}>WHITEPAPER</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
