import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import styles from "../styles/Footer.module.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <Fragment>
      <div className="container">
        <div className={styles.Footer}>
          <div className={styles.FooterLogo}>
            <div className={styles.Image}>
              <img
                src={"/image/Chang-Land_Logo-and-Icon222-187x187x0x5x187x176x1659802894.png"}
                alt=""
              />
            </div>
            <p>© copyright 2022 l Changland</p>
          </div>
          <div className={styles.social}>
            <div className={styles.socialIcon}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgba(6,147,227,1)",
                  borderRadius: "50%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <FontAwesomeIcon icon={faFacebook} />
              </div>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: "rgba(29,161,242,1)",
                  borderRadius: "50%",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                }}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </div>

              <div
              className={styles.instagram}
                style={{
                  width: "50px",
                  height: "50px",
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  margin: "10px",
                  borderRadius: "50%"
                }}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
