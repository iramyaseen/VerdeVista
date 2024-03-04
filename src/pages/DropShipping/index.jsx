import Navbar from "../../components/Navbar/Navbar";
import styles from "./dropshipping.module.css";
import SaveImgBox from "../../components/SaveImgBox/SaveImgBox";
import PackagesSection from "../../components/PackagesSection/PackagesSection";
import Footer from "../../components/FooterSection/Footer";

const index = () => {
  return (
    <>
      <Navbar />
      <main className={styles.dropshipping_wrapper}>
        <div className="container h-100 text-theme-white d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="f-bold banner-title-heading">Drop Shipping</h1>
          <h2 className="description-title f-bold">
            Lorem ipsum dolor sit amet ispum to world.
          </h2>
          <p className="description-text para-text px-5 mx-lg-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            aut porro laboriosam aliquid voluptate deleniti sint sequi doloribus
            perspiciatis consequuntur.
          </p>
          <br />
        </div>
      </main>

      <section className="container-fluid p-5 mt-5">
        <div className="row">
          {[1, 2, 3, 4, 5, 6]?.map((data, i) => (
            <div className="col-xl-4 col-lg-6 mb-5" key={i}>
              <SaveImgBox />
            </div>
          ))}
        </div>
      </section>
      <PackagesSection/>
      <Footer/>
    </>
  );
};

export default index;
