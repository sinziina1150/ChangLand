/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react'
import styles from '../styles/Home.module.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faLock } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <Fragment>
    <Navbar />
    <div className="container">
      <div style={{ height: "70px" }}></div>
      <section className={styles.fristInfo}>
        <div className={styles.TextWelCome}>
          <p
            style={{
              fontSize: "40px",
              fontWeight: "bold",
              fontStyle: "Italic",
              margin: "0",
            }}
          >
            NFT AND METAVERSE
          </p>
          <p
            style={{
              fontSize: "50px",
              fontWeight: "bold",
              fontStyle: "Italic",
              margin: "0",
            }}
          >
            CHANGLAND
          </p>
          <span style={{ fontSize: "24px", fontWeight: "100" }}>
            The Premium Craft NFTS
          </span>
          <br />
          <span style={{ fontSize: "24px", fontWeight: "100" }}>
            inspired by Thai Elephant
          </span>
          <br />
          <div className={styles.buttonClick}>
            <button className={styles.ClickButton}>
              WELCOME TO CHANGLAND
            </button>
          </div>
        </div>
        <div className={styles.Datagit}>
          <img
            src="/image/Sequence-012-2.gif"
            style={{ width: "100%", height: "345px" }}
            alt=""
          />
        </div>
      </section>
      <div className={styles.rulers}>
        <FontAwesomeIcon
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            borderRadius: "50%",
            margin: "0 15px",
          }}
          icon={faAngleDown}
        />
      </div>
      <div style={{ margin: "50px" }}></div>
      <section className={styles.second}>
        <div className={styles.ImageInfo}>
          <img
            src="/image/2-555x555x0x3x555x549x1660668552.png"
            alt=""
          />
        </div>
        <div className={styles.TextInfo}>
          <div className={styles.TextBox}>
            <p>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                WELCOME TO CHANGLAND
              </span>
            </p>
            <p>
              <span>
                Changland is a collection of 2,220 crafted NFT which is
                inspired by{" "}
              </span>
            </p>
            <p>
              <span>
                ChangThai. The collection is formed in digital collectibles on
                Ethereum{" "}
              </span>
            </p>
            <p>
              <span>blockchain.</span>
            </p>
            <div style={{ margin: "10px" }}></div>
            <p>
              <span>
                The inspiration of Changland NFT was began by Changland team
              </span>
            </p>
            <p>
              <span>
                who has an impression in Chang, the sanctuary and largest
                animal
              </span>
            </p>
            <p>
              <span>
                of Thailand for many centuries AND the new generation artist
                who
              </span>
            </p>
            <p>
              <span>
                has a creativity on physical art collaborated to meticulously
                create{" "}
              </span>
            </p>
            <p>
              <span>these Changland NFTs for NFT collector.</span>
            </p>
            <div style={{ margin: "10px" }}></div>
            <p>
              <span>
                “Changverse” is virtual land of tourist attraction in
                Thailandon
              </span>
            </p>
            <p>
              <span>
                Metaverse where it delivers the new experience of travels
                through
              </span>
            </p>
            <p>
              <span>AR & VR, also introduces the background of those</span>
            </p>
            <p>
              <span>
                amazing places to users from everywhere they are in the world
              </span>
            </p>
            <div style={{ margin: "10px" }}></div>
            <p>
              <span>
                Furthermore, the land can be customized by users to support
                your
              </span>
            </p>
            <p>
              <span>
                business and expand the distribution channels from physical to
              </span>
            </p>
            <p>
              <span>digital market.</span>
            </p>
          </div>
        </div>
      </section>
      <div className={styles.rulers}>
        <FontAwesomeIcon
          style={{
            color: "white",
            fontSize: "30px",
            fontWeight: "bold",
            borderRadius: "50%",
            margin: "0 15px",
          }}
          icon={faAngleDown}
        />
      </div>
      <div style={{ margin: "50px" }}></div>

      <div className={styles.TextHeader}>
        <h1
          style={{
            fontStyle: "Italic",
            letterSpacing: "0",
            lineHeight: "1.7px",
            fontWeight: "700",
            textDecoration: "underline",
            fontSize: "60px",
          }}
        >
          NFT CHARACTER
        </h1>
      </div>
      <div style={{ margin: "30px", height: "10px" }}></div>
      <section className={styles.CartInfo}>
        <div className={styles.CartBox}>
          <div className={styles.cart}>
            <div className={styles.CartLogo}>
              <img
                src="image/1-149x149x3x0x143x149x1660919164.png"
                alt=""
              />
            </div>
            <div className={styles.cartText}>
              <h1>SUDRAS</h1>
              <p>
                <span>
                  Sudra are lowest of the social classes, traditionally
                </span>
              </p>
              <p>
                <span>artisans and labourers.</span>
              </p>
              <div></div>
              <p>
                <span>Edition : 100 Sudra</span>
              </p>
              <p>
                <span>﻿Physical Size 40*40*45 CM.</span>
              </p>
              <p>
                <span>Material by soft vinily</span>
              </p>
            </div>
            <div>
              <hr />
            </div>
            <div className={styles.ButtonCart}>
              <button className={styles.cartButton}>
                Pre-Order &nbsp; <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CartBox}>
          <div className={styles.cart}>
            <div className={styles.CartLogo}>
              <img
                src="image/12-copy-181x181x0x10x181x162x1660919062.png"
                alt=""
              />
            </div>
            <div className={styles.cartText}>
              <h1>VAISHYAS</h1>
              <p>
                <span>
                  third highest in ritual status of the four varnas, or social
                  classes.
                </span>
              </p>
              <div></div>
              <p>
                <span>&nbsp;</span>
              </p>
              <p>
                <span>Edition : 20 Vaishyas</span>
              </p>
              <p>
                <span>Physical Size 35*35*40 CM.</span>
              </p>
              <p>
                <span>Material by soft vinily</span>
              </p>
            </div>
            <div>
              <hr />
            </div>{" "}
            <div className={styles.ButtonCart}>
              <button className={styles.cartButton}>
                Pre-Order &nbsp; <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CartBox}>
          <div className={styles.cart}>
            <div className={styles.CartLogo}>
              <img
                src="image/Present_Chang-Land_Rev2-01-153x151x4x0x145x151x1659480848.png"
                alt=""
              />
            </div>
            <div className={styles.cartText}>
              <h1>VAISHYAS</h1>
              <p>
                <span>
                  Kshatriyas second highest in ritual status of the four
                  varnas, traditionally the warrier or ruling class
                </span>
              </p>
              <div></div>

              <p>
                <span>Edition : 20 Vaishyas</span>
              </p>
              <p>
                <span>Material by soft vinily</span>
              </p>
            </div>
            <div>
              <hr />
            </div>
            <div className={styles.ButtonCart}>
              <button className={styles.cartButton}>
                Pre-Order &nbsp; <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
        <div className={styles.CartBox}>
          <div className={styles.cart}>
            <div className={styles.CartLogo}>
              <img
                src="image/Present_Chang-Land_Rev2-01-153x151x4x0x145x151x1659480848.png"
                alt=""
              />
            </div>
            <div className={styles.cartText}>
              <h1>BRAHMIN</h1>
              <p>
                <span>Brahmin highest ranking of the four varnas</span>
              </p>
              <p>
                <span>artisans and labourers.</span>
              </p>
              <div></div>

              <p>
                <span>Edition :</span>
              </p>
              <p>
                <span>﻿Physical Size </span>
              </p>
              <p>
                <span>Material by soft vinily</span>
              </p>
            </div>
            <div>
              <hr />
            </div>
            <div className={styles.ButtonCart}>
              <button className={styles.cartButton}>
                Pre-Order &nbsp; <FontAwesomeIcon icon={faLock} />
              </button>
            </div>
          </div>
        </div>
      </section>
      <div style={{ margin: "30px", height: "10px" }}></div>
      <section className={styles.RoadMap}>
        <div className={styles.HeaderRoadmap}>
          <div className={styles.TextHeaderRoadmap}>
            <div className={styles.LineRoadMap}>
              <h1>Road Map</h1>
            </div>
          </div>
        </div>
        <div className={styles.imageRoadMap}>
          <img
            src="image/roadmap1-01.png"
            alt=""
          />
        </div>
        <div className={styles.imageRoadMap}>
          <img
            src="image/roadmap2-02-2.png"
            alt=""
          />
        </div>
        <div className={styles.imageRoadMap}>
          <img
            src="image/roadmapP3-03-scaled.jpg"
            alt=""
          />
        </div>
      </section>
      <div style={{ margin: "30px", height: "10px" }}></div>
      <section className={styles.LandNFT}>
        <div className={styles.HeaderRoadmap}>
          <div className={styles.TextHeaderRoadmap}>
            <div className={styles.LandNFTText}>
              <h1>NFT LAND </h1>
            </div>
          </div>
        </div>
        <div className={styles.LoadNFTinfo}>
          <div className={styles.BoxLandInfo}>
            <img
              src="image/land-1b-5-scaled-536x301x88x0x360x301x1659854233.jpg"
              alt=""
            />
            <span>Bangsaen Beach</span>
          </div>
          <div className={styles.BoxLandInfo}>
            <img
              src="image/land-1b-4-scaled-536x301x88x0x360x301x1659854207.jpg"
              alt=""
            />
            <span>Saiyok Waterfall</span>
          </div>
          <div className={styles.BoxLandInfo}>
            <img
              src="image/land-1b-1-scaled-541x304x90x0x361x304x1659854376.jpg"
              alt=""
            />
            <span>Khoyai National Park</span>
          </div>
        </div>
      </section>
      <div style={{ margin: "30px", height: "10px" }}></div>
      <section className={styles.MyTeam}>
        <div className={styles.TextTeam}>
          <h1>Team</h1>
        </div>

        <div className={styles.MyTeamInfo}>
          <div className={styles.BoxInfo}>
            <img
              src="image/002-199x216x17x0x165x216x1660311502.png"
              alt=""
            />
            <p>Rangsan A.</p>
            <span>President</span>
          </div>

          <div className={styles.BoxInfo}>
            <img
              src="image/004-175x216x5x0x165x216x1660310691.png"
              alt=""
            />
            <p>Sitthidch T.</p>
            <span>Chief Excutive Officer</span>
          </div>
          <div className={styles.BoxInfo}>
            <img
              src="image/005-165x237x0x10x165x216x1660310525.png"
              alt=""
            />
            <p>Poramin S.</p>
            <span>Chief Operations Officer</span>
          </div>
          <div className={styles.BoxInfo}>
            <img
              src="image/001-174x216x4x0x165x216x1660310349.png"
              alt=""
            />
            <p>Jirayut J.</p>
            <span>VP Marketing</span>
          </div>
          <div className={styles.BoxInfo}>
            <img
              src="image/003-169x216x2x0x165x216x1660309853.png"
              alt=""
            />
            <p>Peti S.</p>
            <span>Product Designer</span>
          </div>
          <div className={styles.BoxInfo}>
            <img
              src="image/006-171x213x4x0x163x213x1660311639.png"
              alt=""
            />
            <p>Popcorn</p>
            <span>Artist</span>
          </div>
        </div>
      </section>
      <div style={{ margin: "100px 0", height: "10px" }}></div>
      <section className={styles.DownWhite}>
        <div className={styles.DownLoad}>
          <button>Download Whitepaper</button>
        </div>
      </section>
    </div>
    <div className={styles.rulers}>
     
    </div>
    <Footer />
  </Fragment>
  )
}
