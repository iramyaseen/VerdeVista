import Footer from "../../components/FooterSection/Footer"
import Navbar from "../../components/Navbar/Navbar"
import PackagesSection from "../../components/PackagesSection/PackagesSection"
import styles from './about.module.css'

const index = () => {
    return (
      <>
      <Navbar/>
      <main className={styles.about_wrapper}>
        <div className="container h-100 text-theme-white d-flex justify-content-center align-items-center flex-column text-center">
          <h1 className="f-bold banner-title-heading">About Us</h1>
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
      <PackagesSection/>
      <Footer/>
      </>
    )
  }
  
  export default index
  