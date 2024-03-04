import React, { useState } from "react";
import styles from "./home.module.css";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import PackagesSection from "../../components/PackagesSection/PackagesSection";
import Footer from "../../components/FooterSection/Footer";


const index = () => {
  const [animationText, setAnimationText] = useState("Before");

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <div
        className={`container-fluid d-flex flex-column justify-content-around align-items-center ${styles.hero_wrapper}`}
      >
        <div
          className={`${styles.hero_content} d-flex justify-content-cneter align-items-end`}
        >
          <h1 className="f-bolder">Create Your Own Design</h1>
        </div>
        <div>
          <Link to="" target="_blank" className="app_store_btn me-4">
            <img
              src="./images/home/googleplaystore.png"
              alt="googleplaystore"
            />
          </Link>

          <Link to="" target="_blank" className="app_store_btn">
            <img src="./images/home/appstore.png" alt="appstore" />
          </Link>
        </div>
      </div>

      {/* animated section */}

      <main className={styles.animated_section_wrapper}>
        <div className={styles.animated_section_bg}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 d-flex align-items-center order-lg-1 order-2 pt-lg-0 pt-5">
                <div
                  className={`${styles.animated_section_content} text-lg-start text-center ms-lg-5`}
                >
                  <h2 className="f-bold description-title ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repellat, quo.
                  </h2>
                  <p className="para-text mt-4 description-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Aliquid, beporis et soluta fugit aliquam elit. Aliquid,
                    beporis et soluta fugit aliquam aspernatur quasi totam.
                  </p>
                </div>
              </div>
              <div className="col-lg-6 order-lg-2 order-1">
                <div
                  className={styles.img_animate_box}
                  onMouseEnter={() => setAnimationText("After")}
                  onMouseLeave={() => setAnimationText("Before")}
                >
                  <img
                    src="./images/home/Before.png"
                    className={styles.animate_box_img1}
                    alt="before"
                  />
                  <img
                    src="./images/home/After.png"
                    className={styles.animate_box_img2}
                    alt="after"
                  />
                  <span className={styles.animationText_box}>
                    {animationText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* About us content*/}
      <main
        className={`${styles.about_section_wrapper} d-flex align-items-center  pb-lg-0 pb-5`}
      >
        <div className="container pb-lg-0 pb-5">
          <div className="row">
            <div className="col-lg-6">
              <figure className={`text-center ${styles.about_secion_img}`}>
                <img src="./images/home/aboutimg.png" alt="" />
              </figure>
            </div>
            <div className="col-lg-6 d-flex align-items-center">
              <div
                className={`${styles.about_section_content} text-lg-start text-center ms-lg-5`}
              >
                <span className={styles.section_small_title}>About</span>
                <h2 className="f-bold description-title ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Repellat, quo.
                </h2>
                <p className="para-text mt-4 description-text">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Aliquid, beporis et soluta fugit aliquam elit. Aliquid,
                  beporis et soluta fugit aliquam aspernatur quasi totam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Packages Component */}
      <PackagesSection />
      {/*  Footer */}
      <Footer />
    </>
  );
};

export default index;
